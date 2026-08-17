"use server";

import {
  PhoneSchema,
  PasswordSchema,
  FormState,
  CodeSchema,
  ChangePasswordSchema,
} from "@/lib/definitions";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

export async function logout() {
  await deleteSession;
  redirect("/login");
}

export async function registerPhone(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = PhoneSchema.safeParse({
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  return { success: true };
}

export async function loginWithPassword(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = PasswordSchema.safeParse({
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  return { success: true };
}

export async function verifyCode(state: FormState, formData: FormData): Promise<FormState> {
  const codeDigits = [1, 2, 3, 4, 5, 6].map((i) => formData.get(`code-${i}`));
  const code = codeDigits.join("");

  const validatedFields = CodeSchema.safeParse({ code });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  return { success: true };
}

export async function changePassword(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = ChangePasswordSchema.safeParse({
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  return { success: true };
}
