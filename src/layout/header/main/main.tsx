/**@format */

import Image from "next/image";

import logo from "@public/pictures/layout/logo.png";

import { HeaderSearch } from "./search";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ShoppingCart, UserRound } from "lucide-react";

export function HeaderMain() {
  return (
    <div className="flex justify-between bg-white px-30 py-7 border-b">
      <div className="flex items-center gap-x-4 w-full">
        <Image alt="logo" src={logo} className="w-[11%] h-9" />
        <HeaderSearch />
      </div>
      <div className="flex items-center gap-x-4">
        <Button variant={"login"} size={"xl"}>
          <div className="flex gap-x-2">
            <UserRound />
            <p>ثبت نام | ورود</p>
          </div>
        </Button>
        <Separator orientation="vertical" />
        <Button variant={"ghost"} size={"icon-xs"} className="hover:bg-white">
          <ShoppingCart className="size-5.5" />
        </Button>
      </div>
    </div>
  );
}
