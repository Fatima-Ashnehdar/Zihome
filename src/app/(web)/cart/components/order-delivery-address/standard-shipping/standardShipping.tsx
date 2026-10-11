/**@format */

import { Separator } from "@/components/ui/separator";

import { ProductSpecifications } from "./productSpecifications";
import { SelectDay } from "./selectDay";
import { SelectTime } from "./selectTime";
import { TotalCost } from "./totalCost";

export function StandardShipping() {
  return (
    <div className="flex flex-col gap-y-9 border rounded-xl bg-white px-6 py-5">
      <ProductSpecifications />
      <Separator />
      <SelectDay />
      <Separator />
      <SelectTime />
      <TotalCost />
    </div>
  );
}
