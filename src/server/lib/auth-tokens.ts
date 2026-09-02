import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { randomBytes } from "crypto";
import { env } from "@/server/config/env";

const accessKey = new TextEncoder().encode(env.JWT_SECRET);
const refreshKey = new TextEncoder().encode(env.JWT_REFRESH_SECRET);

export interface TokenPayload {
  userId: string;
  role: "USER" | "ADMIN";
}

function toTokenPayload(payload: JWTPayload): TokenPayload | null {
  const { userId, role } = payload;
  if (typeof userId !== "string" || (role !== "USER" && role !== "ADMIN")) return null;
  return { userId, role };
}

export async function signAccessToken(payload: TokenPayload) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(accessKey);
}

export async function signRefreshToken(payload: TokenPayload) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(refreshKey);
}

export async function verifyAccessToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, accessKey, { algorithms: ["HS256"] });
    return toTokenPayload(payload);
  } catch {
    return null;
  }
}

export async function verifyRefreshToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, refreshKey, { algorithms: ["HS256"] });
    return toTokenPayload(payload);
  } catch {
    return null;
  }
}

export function generateOtpCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function generateRefreshTokenValue() {
  return randomBytes(48).toString("hex");
}

export function formatPersianScore(score: number) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return score.toFixed(1).replace(/\d/g, (d) => persianDigits[Number(d)]);
}
