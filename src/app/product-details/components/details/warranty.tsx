/** @format */

import { toRialMoney } from "@/app/products/utils";

import { Separator } from "@/components/ui/separator";

import { ShoppingCardModal } from "../modal/shoppingCardModal";

import { CircleStar, Palette } from "lucide-react";

const warrantyDetails = {
  title: "گارانتی اصالت و سلامت فیزیکی کالا",
  color: "سفید",
  currentPrice: 86000000,
  PreviousPrice: 100000000,
};

export function Warranty() {
  return (
    <div className="flex flex-col gap-y-6 border border-gray-200 rounded-2xl px-5 py-6 h-fit bg-white">
      <div className="flex items-center gap-x-2">
        <CircleStar className="size-5 text-gray-700" />
        <p className="text-sm text-gray-700">{warrantyDetails.title}</p>
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
      </div>
      <ShoppingCardModal />
    </div>
  );
}
