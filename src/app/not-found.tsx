/**@format */

import { Button } from "@/components/ui/button";
import { mockNotFound } from "@/layout/data/mockLayout";

import Image from "next/image";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-3 xs:gap-y-4">
      <div className="w-[70%] sm:w-[50%] lg:w-[40%]">
        <Image alt="not-found" src={mockNotFound.picture} />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg xs:text-xl lg:text-2xl font-medium">{mockNotFound.error}</p>
        <p className="text-lg xs:text-xl lg:text-2xl font-medium">{mockNotFound.text}</p>
      </div>
      <p className="text-sm lg:text-base">{mockNotFound.description}</p>
      <Link href={"/"} className="mt-2">
        <Button variant={"default"} size={"xl"}>
          <p> بازگشت به صفحه اصلی</p>
        </Button>
      </Link>
    </div>
  );
}
