"use client";

/**@format */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useLoginStore } from "../store/useLoginStore";

import { mockChangePassword } from "../data/mock-login";

import { Eye, EyeOff } from "lucide-react";

import { changePassword } from "@/actions/auth";

import { useActionState, useState } from "react";

export function ChangePassword() {
  const setPage = useLoginStore((state) => state.setPage);
  const [showPasswordFirst, setShowPasswordFirst] = useState(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState(false);
  const [state, action, pending] = useActionState(changePassword, undefined);
  return (
    <form
      action={action}
      className="flex flex-col gap-y-12 bg-white w-[31%] rounded-2xl px-10 py-12"
    >
      <p className="text-base text-gray-800">{mockChangePassword.title}</p>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-2 relative">
          <p className="text-sm text-gray-900">{mockChangePassword.labelFirst}</p>
          <Input
            className="h-11"
            id="password"
            name="password"
            type={showPasswordFirst ? "text" : "password"}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowPasswordFirst((prev) => !prev)}
            className="absolute top-8.5 left-1"
          >
            {showPasswordFirst ? (
              <EyeOff className="size-5 text-gray-500" />
            ) : (
              <Eye className="size-5 text-gray-500" />
            )}
          </Button>
          {/* <Button variant={"ghost"} className="absolute top-8.5 left-1">
            <Eye className="size-5 text-gray-500" />
          </Button> */}
        </div>
        <div className="flex flex-col gap-y-2">
          {mockChangePassword.lists.map((list) => (
            <li key={list.id} className="text-sm text-gray-600">
              {list.name}
            </li>
          ))}
        </div>
        <div className="flex flex-col gap-y-2 relative">
          <p className="text-sm text-gray-900">{mockChangePassword.labelSecond}</p>
          <Input
            className="h-11"
            id="password"
            name="password"
            type={showPasswordSecond ? "text" : "password"}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowPasswordSecond((prev) => !prev)}
            className="absolute top-8.5 left-1"
          >
            {showPasswordSecond ? (
              <EyeOff className="size-5 text-gray-500" />
            ) : (
              <Eye className="size-5 text-gray-500" />
            )}
          </Button>
          {/* <Button variant={"ghost"} className="absolute top-8.5 left-1">
            <Eye className="size-5 text-gray-500" />
          </Button> */}
        </div>
        <Button variant={"fillDisable"} size={"xl"} onClick={() => setPage("loginWith-password")}>
          <p>تغییر رمز عبور</p>
        </Button>
      </div>
    </form>
  );
}
