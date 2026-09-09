"use server";

import axios from "axios";

import {
  phoneSchema,
  passwordSchema,
  FormState,
  CodeSchema,
  ChangePasswordSchema,
} from "@/lib/validation";

import { redirect } from "next/navigation";
import { deleteSession } from "@/lib/session";
import { cookies } from "next/headers";
import { authCookieOptions } from "@/server/http/auth-context";

export async function logout() {
  await deleteSession();
  redirect("/login");
}

export async function registerPhone(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = phoneSchema.safeParse({
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  const { data } = await axios.post("http://localhost:3000/api/v1/auth/register", {
    phone: validatedFields.data.phone,
  });

  return {
    message: data.data?.message,
    success: true,
  };
}

export async function loginWithPassword(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = passwordSchema.safeParse({
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
  const phone = formData.get("phone");

  const codeDigits = [1, 2, 3, 4, 5, 6].map((i) => formData.get(`code-${i}`));

  const code = codeDigits.join("");

  const validatedFields = CodeSchema.safeParse({ code });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { data } = await axios.post("http://localhost:3000/api/v1/auth/verify-code", {
      phone,
      code,
    });

    const cookieStore = await cookies();

    cookieStore.set("accessToken", data.data.accessToken, authCookieOptions());
  } catch (error) {
    return {
      message: "کد تایید وارد شده اشتباه است.",
      success: false,
    };
  }

  redirect("/dashboard");
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
