/**@format */

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

import { YourAddressModal } from "./modal/yourAddressModal";

import { useCartStore } from "../../store/useCardStore";
import { useModalStore } from "../../store/useModalStore";

import { Address } from "./address";

const deliveryDetails = {
  title: "آدرس تحویل سفارش",
};

export function Title() {
  const setPage = useCartStore((state) => state.setPage);
  const page = useModalStore((state) => state.page);
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex  justify-between items-center">
        <p className="text-lg text-gray-700">{deliveryDetails.title}</p>
        <Button variant={"link"} onClick={() => setPage("shopping-cart")}>
          <div className="flex items-center gap-x-4">
            <p>بازگشت به سبد خرید</p>
            <ChevronLeft className="size-3" />
          </div>
        </Button>
      </div>
      {page === "show" || page === "payment" ? <Address /> : <YourAddressModal />}
    </div>
  );
}
