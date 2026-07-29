/**@format */

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import { mockShippingDetails } from "@/app/shopping-cart/data/mock-shopping-cart";

import { Plus, Trash2, Truck } from "lucide-react";

import picture from "../../../../../../public/pictures/shopping-cart/main-pic.png";

export function DisabledSendingProducts() {
  return (
    <div className="bg-white border rounded-xl px-6 pt-5">
      <div className="flex flex-col gap-y-7">
        <div className="flex items-center gap-x-2">
          <Truck className="text-gray-500" />
          <p className="text-base text-gray-500">ارسال محصولات</p>
        </div>
        <Image alt="main-picture" src={picture} className="w-[20%]" />
        <div className="flex flex-col gap-y-3">
          <p className="text-sm text-gray-400">رنگ</p>
          <div className="flex items-center gap-x-2 bg-gray-100 rounded-full py-1 px-1 w-24">
            <span className="inline-block w-6 h-6 bg-white rounded-full" />
            <p className="text-xs text-gray-700">سفید</p>
          </div>
          <div className="flex items-center gap-x-5 border bg-gray-50 w-fit rounded-md px-2 py-2">
            <Trash2 className="text-gray-500 size-5" />
            <p className="text-gray-500 text-base">۲</p>
            <Plus className="text-gray-500 size-5" />
          </div>
        </div>
      </div>
      <Separator className="my-7" />
      <div className="flex flex-col gap-y-6">
        {mockShippingDetails.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-3 border-b pt-2 pb-7">
            <p className="text-base text-gray-300 font-normal">{item.name}</p>
            <div className="flex items-center gap-x-2">
              {item.icon}
              <p className="text-sm text-gray-400">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
