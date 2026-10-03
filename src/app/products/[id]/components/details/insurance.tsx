/**@format */

import { toRialMoney } from "@/app/products/(shop)/utils/index";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import { InsuranceModal } from "../modal/InsuranceModal";
import { useProductIdStore } from "@/store/useProductStore";

const insuranceDetails = {
  title: "بیمه به کالا اضافه شد",
};

export function InsuranceDetails() {
  const product = useProductIdStore((state) => state.product);
  if (!product?.hasWarranty) return null;
  return (
    <div className="flex flex-col gap-y-6 border border-gray-200 rounded-2xl px-5 pt-5 pb-3 bg-white">
      <div className="flex items-center justify-between">
        <p className="text-base text-gray-900">{insuranceDetails.title}</p>
        <InsuranceModal />
      </div>
      <div className="flex justify-between items-center">
        <Button variant={"outline"} size={"xl"}>
          <div className="flex items-center gap-x-1">
            <Plus />
            <p>اضافه کردن</p>
          </div>
        </Button>
        <div className="flex flex-col gap-y-2.5">
          <div className="flex items-center gap-x-2">
            <p className="line-through text-sm text-gray-600 pt-1">
              {toRialMoney(Number(product?.insurance.previousPrice))}
            </p>
            <div className="bg-red-500 px-2.5 py-1 rounded-full shadow-discard">
              <p className="text-sm text-white">{toRialMoney(20)}٪</p>
            </div>
          </div>

          <p className="text-base text-gray-800">
            {toRialMoney(Number(product?.insurance.currentPrice))} تومان
          </p>
        </div>
      </div>
    </div>
  );
}
