/**@format */

import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";
import { ShoppingCartTabs } from "./components/tabs";

const shoppingCard = {
  title: "سبد خرید",
};

export default function ShoppingCartHome() {
  return (
    <div dir="rtl" className="flex flex-col gap-y-12 px-30 h-screen py-8 bg-nutral-50">
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
