/**@format */

import { DeliveryDetails } from "./deliveryDetails";
import { AccountStatement } from "./statementAccount";

export function OrderDeliveryAddressPage() {
  return (
    <div className="flex gap-x-5 mt-[18%]">
      <DeliveryDetails />
      <div>
        <AccountStatement />
      </div>
    </div>
  );
}
