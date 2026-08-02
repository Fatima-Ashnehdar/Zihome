/**@format */
import { mockSelectDeliveryTime } from "@/app/shopping-cart/data/mock-shopping-cart";

import { Checkbox } from "@/components/ui/checkbox";
import { SelectSeparator } from "@/components/ui/select";

import { ClockFading } from "lucide-react";

export function SelectTime() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center gap-x-2">
        <ClockFading className="size-5 text-gray-600" />
        <p className="text-base text-gray-950">{mockSelectDeliveryTime.title}</p>
      </div>
      <div className="flex flex-col gap-y-5">
        {mockSelectDeliveryTime.time.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-2">
              <Checkbox id="terms-checkbox-desc" name="terms-checkbox-desc" />
              <p className="text-sm text-gray-800 font-normal">{item.clock}</p>
            </div>
            <SelectSeparator />
          </div>
        ))}
      </div>
    </div>
  );
}
