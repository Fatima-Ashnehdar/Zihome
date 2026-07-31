/**@format */

import Image from "next/image";

import picture from "../../../../../public/pictures/shopping-cart/payment-failed.png";

import { OctagonX } from "lucide-react";

import { Button } from "@/components/ui/button";

const paymentResult = {
  title: "پرداخت شما ناموفق بود!",
  placeOrder: "سفارش شما ثبت شده و در انتظار صف پرداخت است",
  payment: "سفارش شما در صورت عدم پرداخت نهایت تا ۲۴ ساعت آینده به صورت خودکار لغو خواهد شد.",
};

export function PaymentResult() {
  return (
    <div className="flex items-center justify-between border rounded-xl py-9 px-7 bg-white">
      <div className="flex flex-col gap-y-9">
        <div className="flex items-center gap-x-2">
          <OctagonX className="size-8 text-red-600" />
          <p className="text-base text-red-600">{paymentResult.title}</p>
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-base text-gray-600">{paymentResult.placeOrder}</p>
          <p className="text-base text-gray-900">{paymentResult.payment}</p>
        </div>
        <div className="flex gap-x-5">
          <Button variant={"outline"} size={"xl"}>
            <p>بازگشت به صفحه اصلی</p>
          </Button>
          <Button variant={"shoppingCard"} size={"xl"} className="w-[35%]">
            <p>پرداخت مجدد</p>
          </Button>
        </div>
      </div>
      <div className="w-[30%]">
        <Image alt="payment-failed" src={picture} />
      </div>
    </div>
  );
}
