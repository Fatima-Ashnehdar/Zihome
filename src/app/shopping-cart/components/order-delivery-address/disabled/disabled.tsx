/**@format */

import { DisabledSendingProducts } from "./sendingProducts";
import { DisabledTabs } from "./tabs";

export function Disabled() {
  return (
    <div className="flex flex-col gap-y-7">
      <DisabledTabs />
      <DisabledSendingProducts />
    </div>
  );
}
