/**@format */

// StateManagement

import { Conclusion } from "./conclusion";
import { Disabled } from "./disabled/disabled";
import { DiscountCode } from "./discountCode";
import { SelectPaymentMethod } from "./selectPaymentMethod";
import { TabsSendPost } from "./tabs";
import { Title } from "./title";

export function DeliveryDetails() {
  return (
    <div className="flex flex-col gap-y-7 w-full">
      <Title />
      {/* <TabsSendPost /> */}
      {/* <Disabled /> */}
      <SelectPaymentMethod />
      <DiscountCode />
      <Conclusion />
    </div>
  );
}
