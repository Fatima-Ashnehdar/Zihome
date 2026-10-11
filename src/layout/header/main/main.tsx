/**@format */

import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

import logo from "@public/pictures/layout/logo.png";

import { HeaderSearch } from "./search";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { verifyAccessToken } from "@/server/lib/auth-tokens";

import { LayoutDashboard, ShoppingCart, UserRound } from "lucide-react";

export async function HeaderMain() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const user = token ? await verifyAccessToken(token) : null;

  return (
    <div className="flex justify-between bg-white px-30 py-7 border-b">
      <div className="flex items-center gap-x-4 w-full">
        <Link href="/" className="w-[11%] shrink-0">
          <Image alt="logo" src={logo} className="h-9 w-full" />
        </Link>
        <HeaderSearch />
      </div>
      <div className="flex items-center gap-x-4">
        {user ? (
          <Link href="/dashboard">
            <Button variant={"login"} size={"xl"}>
              <div className="flex gap-x-2">
                <LayoutDashboard />
                <p>حساب کاربری</p>
              </div>
            </Button>
          </Link>
        ) : (
          <Link href={"/login"}>
            <Button variant={"login"} size={"xl"}>
              <div className="flex gap-x-2">
                <UserRound />
                <p>ثبت نام | ورود</p>
              </div>
            </Button>
          </Link>
        )}
        <Separator orientation="vertical" />
        <Link href={"/cart"}>
          <Button variant={"ghost"} size={"icon-xs"} className="hover:bg-white">
            <ShoppingCart className="size-5.5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
