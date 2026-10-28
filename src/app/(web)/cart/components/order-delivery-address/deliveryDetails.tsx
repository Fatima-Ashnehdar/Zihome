/**@format */

// StateManagement

import { useModalStore } from "../../store/useModalStore";

import { Conclusion } from "./conclusion";
import { Disabled } from "./disabled/disabled";
import { DiscountCode } from "./discountCode";
import { SelectPaymentMethod } from "./selectPaymentMethod";
import { TabsSendPost } from "./tabs";
import { Title } from "./title";

export function DeliveryDetails() {
  const page = useModalStore((state) => state.page);
  return (
    <div className="flex flex-col gap-y-7 w-full">
      <Title />
      {page === "disabled" && <Disabled />}
      {page === "show" && <TabsSendPost />}
      {page === "payment" && (
        <div className="flex flex-col gap-y-7">
          <SelectPaymentMethod />
          <DiscountCode />
          <Conclusion />
        </div>
      )}
    </div>
  );
}
