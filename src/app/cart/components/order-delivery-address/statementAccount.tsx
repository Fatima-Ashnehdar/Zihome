/**@format */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { mockTotalPrice } from "../../data/mock-cart";

import { toRialMoney } from "@/app/products/(shop)/utils/index";

import { Truck } from "lucide-react";

import { useModalStore } from "../../store/useModalStore";
import { useCartStore } from "../../store/useCardStore";

const accountStatement = {
  title: "صورت حساب",
};

export function AccountStatement() {
  const setPage = useCartStore((state) => state.setPage);

  const pageModal = useModalStore((state) => state.page);
  const setPageModal = useModalStore((state) => state.setPage);

  const pageSelected = pageModal === "show" || pageModal === "payment";
  const textColor = pageSelected ? "text-gray-900" : "text-gray-400";
  const bgColor = pageSelected ? "bg-white" : "bg-gray-50";

  const handleClick = () => {
    if (pageModal === "show") {
      setPageModal("payment");
    } else if (pageModal === "payment") {
      setPage("payment-result");
    }
  };

  return (
    <div className="sticky top-0 left-0 flex flex-col gap-y-4 w-70 pt-2">
      <p className={`text-base ${textColor} font-normal`}>{accountStatement.title}</p>
      <div
        className={`flex flex-col gap-y-4 border border-gray-300 ${bgColor} rounded-xl px-6 py-8`}
      >
        <p className={`text-center ${textColor} text-base`}>اطلاعات پرداخت</p>
        <div className="flex flex-col gap-y-4">
          {mockTotalPrice.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p className={`${textColor} text-sm`}>{item.name}</p>
              <p className={`${textColor} text-sm`}>{toRialMoney(item.price)} تومان</p>
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex flex-col gap-y-3 border-b border-gray-300 border-dashed pb-5">
          <div className="flex justify-between">
            <p className={`${textColor} text-sm`}>هزینه ارسال</p>
            <p className={`${textColor} text-sm`}>{toRialMoney(75000)}</p>
          </div>
          <Truck className="text-gray-400" />
        </div>
        <div>
          <div className="flex justify-between">
            <p className={`${textColor} text-sm`}>جمع کل</p>
            <p className={`${textColor} text-sm`}>{toRialMoney(93575500)} تومان</p>
          </div>
        </div>
      </div>
      <Button
        variant={pageSelected ? "shoppingCard" : "fillDisable"}
        size={"xl"}
        onClick={handleClick}
      >
        <p className="font-normal">{pageModal === "payment" ? "پرداخت" : "تایید و ادامه خرید"}</p>
      </Button>
    </div>
  );
}
