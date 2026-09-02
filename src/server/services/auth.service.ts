import { z } from "zod";
import { prisma } from "@/server/db/prisma";
import { env } from "@/server/config/env";
import {
  generateOtpCode,
  generateRefreshTokenValue,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from "@/server/lib/auth-tokens";
import { hashPassword, verifyPassword } from "@/server/lib/password";
import { badRequest, unauthorized } from "@/server/lib/errors";

export const phoneSchema = z.object({
  phone: z.string().trim().regex(/^09\d{9}$/, "شماره موبایل وارد شده معتبر نیست."),
});

export const loginSchema = z.object({
  phone: z.string().trim().regex(/^09\d{9}$/),
  password: z.string().trim().min(8).regex(/[a-zA-Z]/).regex(/[0-9]/),
});

export const verifyCodeSchema = z.object({
  phone: z.string().trim().regex(/^09\d{9}$/),
  code: z.string().trim().length(6),
});

export const changePasswordSchema = z
  .object({
    phone: z.string().trim().regex(/^09\d{9}$/),
    password: z.string().trim().min(8).regex(/[a-zA-Z]/).regex(/[0-9]/),
    confirmPassword: z.string().trim(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند.",
    path: ["confirmPassword"],
  });

async function issueTokens(user: { id: string; role: "USER" | "ADMIN" }) {
  const payload = { userId: user.id, role: user.role };
  const accessToken = await signAccessToken(payload);
  const refreshToken = await signRefreshToken(payload);

  await prisma.refreshToken.create({
    data: {
      token: generateRefreshTokenValue(),
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  return { accessToken, refreshToken };
}

export async function registerPhone(phone: string) {
  const code = generateOtpCode();
  const expiresAt = new Date(Date.now() + env.OTP_EXPIRY_MINUTES * 60 * 1000);

  let user = await prisma.user.findUnique({ where: { phone } });
  if (!user) user = await prisma.user.create({ data: { phone } });

  await prisma.otpCode.create({ data: { phone, code, expiresAt, userId: user.id } });

  if (env.NODE_ENV === "development") {
    console.info(`[OTP] phone=${phone} code=${code}`);
  }

  return { success: true, message: "OTP sent" };
}

export async function verifyOtp(phone: string, code: string) {
  const otp = await prisma.otpCode.findFirst({
    where: { phone, code, used: false, expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
  });
  if (!otp) throw badRequest("کد تایید نامعتبر یا منقضی شده است.");

  await prisma.otpCode.update({ where: { id: otp.id }, data: { used: true } });
  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user) throw badRequest("User not found");

  const tokens = await issueTokens(user);
  return {
    user: { id: user.id, phone: user.phone, role: user.role },
    ...tokens,
  };
}

export async function loginWithPassword(phone: string, password: string) {
  const user = await prisma.user.findUnique({ where: { phone } });
  if (!user?.passwordHash) throw unauthorized("Invalid credentials");
  if (!(await verifyPassword(password, user.passwordHash))) throw unauthorized("Invalid credentials");

  const tokens = await issueTokens(user);
  return {
    user: { id: user.id, phone: user.phone, role: user.role },
    ...tokens,
  };
}

export async function changePassword(input: z.infer<typeof changePasswordSchema>) {
  const passwordHash = await hashPassword(input.password);
  const user = await prisma.user.upsert({
    where: { phone: input.phone },
    update: { passwordHash },
    create: { phone: input.phone, passwordHash },
  });
  return { success: true, userId: user.id };
}

export async function refreshAccessToken(refreshToken: string) {
  const payload = await verifyRefreshToken(refreshToken);
  if (!payload) throw unauthorized("Invalid refresh token");

  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user) throw unauthorized("User not found");

  return { accessToken: await signAccessToken({ userId: user.id, role: user.role }) };
}

export async function logoutUser(userId: string) {
  await prisma.refreshToken.deleteMany({ where: { userId } });
  return { success: true };
}

export async function getCurrentUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, phone: true, role: true, createdAt: true },
  });
  if (!user) throw unauthorized("User not found");
  return user;
}
