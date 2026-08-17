"use client";

/**@format */

import { ChangePassword } from "./components/changePassword";
import { LoginWithPassword } from "./components/loginWithPassword";
import { Register } from "./components/register";
import { Title } from "./components/title";
import { VerificationCode } from "./components/verificationCode";

import { useLoginStore } from "./store/useLoginStore";

export default function LoginPage() {
  const page = useLoginStore((state) => state.page);
  return (
    <div
      dir="rtl"
      className="flex flex-col justify-center items-center gap-y-7 bg-gray-100 bg-[url('/pictures/login/Texture.png')] h-screen bg-cover"
    >
      <Title />
      <div className="flex justify-center w-full">
        {page === "register" && <Register />}
        {page === "verification-code" && <VerificationCode />}
        {page === "loginWith-password" && <LoginWithPassword />}
        {page === "change-password" && <ChangePassword />}
      </div>
    </div>
  );
}
