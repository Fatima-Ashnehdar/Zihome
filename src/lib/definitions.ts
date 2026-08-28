import * as z from "zod";

import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

export const phoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(11, { message: "شماره موبایل باید ۱۱ رقم باشد." })
    .regex(/^09\d{9}$/, { message: "شماره موبایل وارد شده معتبر نیست." }),
});

export const passwordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(8, { message: "رمز عبور باید حداقل ۸ کاراکتر باشد." })
    .regex(/[a-zA-Z]/, { message: "شامل حداقل یک حرف انگلیسی باشد." })
    .regex(/[0-9]/, { message: "شامل حداقل یک عدد باشد." }),
});

export const CodeSchema = z.object({
  code: z.string().trim().length(6, { message: "کد تایید باید ۶ رقم باشد." }),
});

export const ChangePasswordSchema = z
  .object({
    password: passwordSchema.shape.password,
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند.",
    path: ["confirmPassword"],
  });

export type FormState =
  | {
      errors?: {
        phone?: string[];
        password?: string[];
        code?: string[];
        confirmPassword?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;

export type SessionPayload = {
  userId: string;
  expiresAt: Date;
};

export async function logout() {
  await deleteSession();
  redirect("/login");
}
