"use client";
/** @format */

import { toRialMoney } from "@/app/products/(shop)/utils/index";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { CircleStar, Minus, Palette, Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const warrantyDetails = {
  id: 1,
  name: "گارانتی اصالت و سلامت فیزیکی کالا",
  color: "سفید",
  currentPrice: 86000000,
  PreviousPrice: 100000000,
  picture: "/pictures/details/main-pic.png",
};

export function Warranty() {
  const plusCounter = useCartStore((state) => state.plusCount);
  const minusCounter = useCartStore((state) => state.minusCount);
  const addItem = useCartStore((state) => state.addItem);
  const itemCounter = useCartStore((state) => state.counter(warrantyDetails.id));
  const addToCart = () => {
    addItem({
      id: warrantyDetails.id,
      name: warrantyDetails.name,
      color: warrantyDetails.color,
      picture: warrantyDetails.picture,
      counter: warrantyDetails.id,
    });
  };
  return (
    <div className="flex flex-col gap-y-6 border border-gray-200 rounded-2xl px-5 py-6 h-fit bg-white">
      <div className="flex items-center gap-x-2">
        <CircleStar className="size-5 text-gray-700" />
        <p className="text-sm text-gray-700">{warrantyDetails.name}</p>
      </div>
      <Separator />
      <div className="flex items-center gap-x-2">
        <Palette className="size-5 text-gray-700" />
        <p className="text-sm text-gray-700">{warrantyDetails.color}</p>
      </div>
      <Separator />
      <div dir="ltr" className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <div className="bg-red-500 px-3 py-1 rounded-full shadow-discard">
            <p className="text-sm text-white">{toRialMoney(30)}%</p>
          </div>
          <p className="line-through text-sm text-gray-600">
            {toRialMoney(warrantyDetails.PreviousPrice)}
          </p>
        </div>
        <div className="flex gap-x-1">
          <p className="text-base text-gray-900">تومان</p>
          <p className="text-base text-gray-900">{toRialMoney(warrantyDetails.currentPrice)}</p>
        </div>
        {itemCounter > 0 && (
          <div className="flex items-center gap-x-2 border border-gray-200 rounded-lg p-0.5 w-fit bg-gray-50">
            <Button variant={"ghost"} size={"icon"} onClick={() => plusCounter(warrantyDetails.id)}>
              <Plus className="size-4 text-gray-700" />
            </Button>

            <p className="text-sm font-normal text-gray-800">{itemCounter}</p>

            <Button
              variant={"ghost"}
              size={"icon"}
              onClick={() => minusCounter(warrantyDetails.id)}
            >
              <Minus className="size-4 text-gray-700" />
            </Button>
          </div>
        )}
      </div>
      <Button variant={"shoppingCard"} size={"xl"} onClick={addToCart}>
        <p className="text-sm font-normal">افزودن به سبد خرید</p>
      </Button>
    </div>
  );
}
