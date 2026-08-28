"use client";

/**@format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useLoginStore } from "../store/useLoginStore";

import { mockVerificationCode } from "../data/mock-login";

import { ChevronLeft } from "lucide-react";

import { verifyCode } from "@/actions/auth";

import { useActionState } from "react";

export function VerificationCode() {
  const setPage = useLoginStore((state) => state.setPage);
  const [state, action, pending] = useActionState(verifyCode, undefined);

  return (
    <form
      action={action}
      className="flex flex-col gap-y-12 bg-white w-[31%] rounded-2xl px-10 py-12"
    >
      <p className="text-base text-gray-800">{mockVerificationCode.title}</p>
      <div className="flex flex-col items-start gap-y-6">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-gray-900">{mockVerificationCode.label}</p>
          <div className="flex gap-x-5">
            {[1, 2, 3, 4, 5, 6].map((input) => (
              <Input
                key={input}
                className="h-12 rounded-md text-center"
                id={`code-${input}`}
                name={`code-${input}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
              />
            ))}
          </div>
          {state?.errors?.code && (
            <p className="text-xs text-red-500 mt-1">{state.errors.code[0]}</p>
          )}
        </div>
        <Button variant={"ghost"} onClick={() => setPage("loginWith-password")}>
          <div className="flex items-center gap-x-3">
            <p className="text-xs text-blue-600">ورود با رمز عبور</p>
            <ChevronLeft className="size-3 text-blue-600" />
          </div>
        </Button>
      </div>
      <div className="flex flex-col gap-y-7 -mt-5">
        <div className="flex gap-x-1 justify-center">
          <p className="text-sm text-gray-900">۱۰:۰۱</p>
          <p className="text-sm text-gray-900">{mockVerificationCode.text}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <Button type="submit" variant={"shoppingCard"} size={"xl"}>
            <p>تایید</p>
          </Button>
          <p className="text-xs text-gray-800 text-center">
            با ورود به <span className="text-primary">زی هوم،</span> شما شرایط استفاده و{" "}
            <span className="text-primary">قوانین حریم خصوصی</span> ما را می‌پذیرید.
          </p>
        </div>
      </div>
    </form>
  );
}
