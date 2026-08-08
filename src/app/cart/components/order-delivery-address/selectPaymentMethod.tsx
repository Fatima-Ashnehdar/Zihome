/**@format */

import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import { CreditCard } from "lucide-react";

const selectPaymentMethod = {
  title: "انتخاب روش پرداخت",
};

export function SelectPaymentMethod() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-base text-gray-950">{selectPaymentMethod.title}</p>
      <div className="flex flex-col gap-y-5 border rounded-xl py-9 px-7 bg-white">
        <div className="flex items-center gap-x-5">
          <Checkbox id="terms-checkbox-desc" name="terms-checkbox-desc" defaultChecked />
          <div className="flex items-center gap-x-3">
            <CreditCard className="size-5 text-gray-600" />
            <p className="text-sm text-gray-600">پرداخت اینترنتی</p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-x-5">
          <Checkbox id="terms-checkbox-desc" name="terms-checkbox-desc" />
          <div className="flex items-center gap-x-3">
            <CreditCard className="size-5 text-gray-600" />
            <p className="text-sm text-gray-600">پرداخت درب منزل</p>
          </div>
        </div>
      </div>
    </div>
  );
}
