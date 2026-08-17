import * as z from "zod";

import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

export const PhoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(11, { message: "شماره موبایل باید ۱۱ رقم باشد." })
    .regex(/^09\d{9}$/, { message: "شماره موبایل وارد شده معتبر نیست." }),
});

export const PasswordSchema = z.object({
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
    password: PasswordSchema.shape.password,
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

// export const SignupFormSchema = z.object({
//   name: z.string().min(2, { error: "Name must be at least 2 characters long." }).trim(),
//   password: z
//     .string()
//     .min(8, { error: "Be at least 8 characters long" })
//     .regex(/[a-zA-Z]/, { error: "Contain at least one letter." })
//     .regex(/[0-9]/, { error: "Contain at least one number." })
//     .regex(/[^a-zA-Z0-9]/, {
//       error: "Contain at least one special character.",
//     })
//     .trim(),
// });
