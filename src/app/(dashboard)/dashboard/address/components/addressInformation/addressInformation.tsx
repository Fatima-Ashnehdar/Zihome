/**@format */

import { Separator } from "@/components/ui/separator";

import { AddressInformationTitle } from "./title";
import { Addresses } from "./addresses";

export function AddressInformation() {
  return (
    <div className="flex flex-col gap-y-6 border rounded-xl p-5">
      <AddressInformationTitle />
      <Separator />
      <Addresses />
    </div>
  );
}
