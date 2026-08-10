/**@format */

import { PaymentDetails } from "./paymentDetails";
import { PaymentResult } from "./paymentResult";

export function Payment() {
  return (
    <div className="flex flex-col gap-y-6 mt-[16%]">
      <PaymentResult />
      <PaymentDetails />
    </div>
  );
}
