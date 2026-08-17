"use client";

/**@format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useLoginStore } from "../store/useLoginStore";

import { mockRegister } from "../data/mock-login";

import { X } from "lucide-react";

import { registerPhone } from "@/actions/auth";

import { useActionState } from "react";

export function Register() {
  const setPage = useLoginStore((state) => state.setPage);
  const [state, action, pending] = useActionState(registerPhone, undefined);
  return (
    <form
      action={action}
      className="flex flex-col gap-y-12 bg-white w-[31%] rounded-2xl px-10 py-12"
    >
      <div className="flex flex-col gap-y-4">
        <p className="text-base text-gray-800">{mockRegister.title}</p>
        <p className="text-sm text-gray-800">{mockRegister.text}</p>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2 relative">
          <p className="text-sm text-gray-900">{mockRegister.label}</p>
          <Input
            id="phone"
            name="phone"
            type="text"
            inputMode="numeric"
            placeholder="۰۹۱۲۶۹۹۶۷۵۵"
            className="h-11 pr-4"
          />
          <Button variant={"ghost"} className="absolute top-8.5 left-1">
            <X className="size-4" />
          </Button>
        </div>
        {state?.errors?.phone && <p>{state.errors.phone}</p>}
        <div className="flex flex-col gap-y-3">
          <Button
            disabled={pending}
            type="submit"
            variant={"shoppingCard"}
            size={"xl"}
            onClick={() => setPage("verification-code")}
          >
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
