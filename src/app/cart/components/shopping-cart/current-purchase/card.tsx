"use client";

/**@format */

import Image from "next/image";

import { useState } from "react";

import { ProductsListProps } from "../../../types";

import { Button } from "@/components/ui/button";

import { ChevronLeft, CircleStar, Minus, Plus } from "lucide-react";

export function ProductsCard({ name, warranty, color, picture }: ProductsListProps) {
  const [counter, setCounter] = useState<number>(1);

  const counterPlus = () => {
    setCounter(counter + 1);
  };

  const counterMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex items-start gap-x-20 bg-white border border-gray-200 rounded-xl px-15 py-10">
      <div className="flex items-center gap-x-20">
        <div className="w-[30%]">
          <Image alt="main-picture" src={picture} />
        </div>

        <div className="flex flex-col gap-y-8">
          <p className="text-base text-gray-900">{name}</p>
          <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-3">
              <CircleStar className="size-5 text-gray-600" />
              <p>{warranty}</p>
            </div>

            <div className="flex items-center gap-x-2 bg-gray-100 rounded-full py-1 px-1 w-24">
              <span className="inline-block w-6 h-6 bg-white rounded-full" />
              <p className="text-xs text-gray-700">{color}</p>
            </div>
            <div>
              <p className="text-sm text-gray-800">موجود در انبار</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-3 bg-gray-50 border border-gray-100 rounded-md w-fit py-1">
            <Button variant={"link"} onClick={counterMinus}>
              <Minus className="size-5" />
            </Button>
            <p className="text-sm text-gray-700 font-medium">{counter}</p>
            <Button variant={"link"} onClick={counterPlus}>
              <Plus className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <Button variant={"ghost"}>
        <div className="flex items-center gap-x-2">
          <p className="text-blue-600">انتقال به خرید بعدی</p>
          <ChevronLeft className="size-3 text-blue-600" />
        </div>
      </Button>
    </div>
  );
}
