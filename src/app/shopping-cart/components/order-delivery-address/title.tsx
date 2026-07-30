/**@format */

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

import { YourAddressModal } from "./modal/yourAddressModal";

const deliveryDetails = {
  title: "آدرس تحویل سفارش",
};

export function Title() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex  justify-between items-center">
        <p className="text-lg text-gray-700">{deliveryDetails.title}</p>
        <Button variant={"link"}>
          <div className="flex items-center gap-x-4">
            <p>بازگشت به سبد خرید</p>
            <ChevronLeft className="size-3" />
          </div>
        </Button>
      </div>
      <YourAddressModal />
    </div>
  );
}
