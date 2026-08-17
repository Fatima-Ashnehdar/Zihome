"use client";

/**@format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useLoginStore } from "../store/useLoginStore";

import { mockLoginWithPassword } from "../data/mock-login";

import { ChevronLeft, Eye, EyeOff } from "lucide-react";

import Link from "next/link";

import { loginWithPassword } from "@/actions/auth";

import { useActionState, useState } from "react";

export function LoginWithPassword() {
  const setPage = useLoginStore((state) => state.setPage);
  const [showPassword, setShowPassword] = useState(false);
  const [state, action] = useActionState(loginWithPassword, undefined);

  return (
    <form
      action={action}
      className="flex flex-col gap-y-12 bg-white w-[31%] rounded-2xl px-10 py-12"
    >
      <p className="text-base text-gray-800">{mockLoginWithPassword.title}</p>
      <div className="flex flex-col gap-y-9">
        <div className="flex flex-col gap-y-2 relative">
          <p className="text-sm text-gray-900">{mockLoginWithPassword.label}</p>
          <Input
            className="h-11"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-8 left-1.5"
          >
            {showPassword ? (
              <EyeOff className="size-5 text-gray-500" />
            ) : (
              <Eye className="size-5 text-gray-500" />
            )}
          </Button>
          {state?.errors?.password && (
            <p className="text-xs text-red-500 mt-1">{state.errors.password[0]}</p>
          )}
          {/* <Button variant={"ghost"} className="absolute top-8 left-1.5">
            <Eye className="size-5 text-gray-500" />
          </Button> */}
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <Button variant={"ghost"} onClick={() => setPage("register")}>
            <div className="flex items-center gap-x-3">
              <p className="text-xs text-blue-600">ورود با رمز یکبار مصرف</p>
              <ChevronLeft className="size-3 text-blue-600" />
            </div>
          </Button>
          <Button variant={"ghost"} onClick={() => setPage("change-password")} className="-mt-2">
            <div className="flex items-center gap-x-3">
              <p className="text-xs text-blue-600">فراموشی رمز عبور</p>
              <ChevronLeft className="size-3 text-blue-600" />
            </div>
          </Button>
        </div>
        <Link href={"/"}>
          <Button variant={"shoppingCard"} size={"xl"}>
            <p>تایید</p>
          </Button>
        </Link>
      </div>
    </form>
  );
}
