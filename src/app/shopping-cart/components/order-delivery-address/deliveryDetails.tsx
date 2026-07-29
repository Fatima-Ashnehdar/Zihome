/**@format */

// StateManagement

import { Disabled } from "./disabled/disabled";
import { Title } from "./title";

export function DeliveryDetails() {
  return (
    <div className="flex flex-col gap-y-7 w-full">
      <Title />
      <Disabled />
    </div>
  );
}
