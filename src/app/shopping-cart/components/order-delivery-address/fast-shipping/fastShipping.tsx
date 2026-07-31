/**@format */

import { Separator } from "@/components/ui/separator";
import { ProductSpecifications } from "./productSpecifications";
import { SelectTime } from "./selectTime";
import { TotalCost } from "./TotalCost";

export function FastShipping() {
  return (
    <div className="flex flex-col gap-y-9 border rounded-xl bg-white px-6 py-5">
      <ProductSpecifications />
      <Separator />
      <SelectTime />
      <TotalCost />
    </div>
  );
}
