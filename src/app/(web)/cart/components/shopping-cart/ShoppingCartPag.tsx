/**@format */

import { Separator } from "@/components/ui/separator";

import { ShoppingCart } from "lucide-react";

import { ShoppingCartTabs } from "./tabs";

const shoppingCard = {
  title: "سبد خرید",
};

export function ShoppingCartPag() {
  return (
    <div className="flex flex-col gap-y-12 py-8 mt-[13%]">
      <div className="flex flex-col gap-y-7">
        <div className="flex gap-x-3">
          <ShoppingCart className="text-gray-600" />
          <p className="text-base text-gray-900">{shoppingCard.title}</p>
        </div>
        <Separator />
      </div>
      <ShoppingCartTabs />
    </div>
  );
}
