"use client";

/**@format */

import { useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Plus, Trash2 } from "lucide-react";

import picture from "@public/pictures/shopping-cart/main-pic.png";

import { toRialMoney } from "@/app/products/utils";

export function ProductDetails() {
  const [counter, setCounter] = useState<number>(2);

  const counterPlus = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="flex flex-col gap-y-8">
      <Image alt="product-picture" src={picture} className="w-[10%]" />
      <div className="flex flex-col gap-y-3">
        <p className="text-sm text-gray-800">رنگ </p>
        <div className="flex items-center gap-x-2 bg-gray-100 rounded-full py-1 px-1 w-24">
          <span className="inline-block w-6 h-6 bg-white rounded-full" />
          <p className="text-xs text-gray-700">سفید</p>
        </div>
        <div className="flex items-center gap-x-1 border bg-gray-50 w-fit rounded-md px-1 py-1">
          <Button variant={"ghost"}>
            <Trash2 className="text-gray-500 size-5" />
          </Button>
          <p className="text-gray-500 text-base">{toRialMoney(counter)}</p>
          <Button variant={"ghost"} onClick={counterPlus}>
            <Plus className="text-gray-500 size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
