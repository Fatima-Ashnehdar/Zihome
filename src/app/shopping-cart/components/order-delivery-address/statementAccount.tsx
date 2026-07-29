/**@format */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { mockTotalPrice } from "../../data/mock-shopping-cart";

import { toRialMoney } from "@/app/products/utils";

import { Truck } from "lucide-react";

const accountStatement = {
  title: "صورت حساب",
};

export function AccountStatement() {
  return (
    <div className="flex flex-col gap-y-4 w-[28%] pt-2">
      <p className="text-base text-gray-700 font-medium">{accountStatement.title}</p>
      <div className="flex flex-col gap-y-4 border border-gray-300 bg-gray-50 rounded-xl px-6 py-8">
        <p className="text-center text-gray-400 text-base">اطلاعات پرداخت</p>
        <div className="flex flex-col gap-y-4">
          {mockTotalPrice.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p className="text-gray-400 text-sm">{item.name}</p>
              <p className="text-gray-400 text-sm">{toRialMoney(item.price)} تومان</p>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col  gap-y-3 border-b border-gray-300 border-dashed pb-5">
          <p className="text-gray-400 text-sm">هزینه ارسال</p>
          <Truck className="text-gray-400" />
        </div>
      </div>
      <Button variant={"fillDisable"} size={"xl"}>
        <p className="font-normal">تایید و ادامه خرید</p>
      </Button>
    </div>
  );
}
