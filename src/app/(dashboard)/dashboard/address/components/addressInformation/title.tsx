/**@format */

import { MapPin, Plus } from "lucide-react";

import { addressInformation } from "../../data/mock-address";

import { Button } from "@/components/ui/button";

export function AddressInformationTitle() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-3">
        <MapPin className="text-gray-600" />
        <p className="text-base text-gray-900">{addressInformation.title}</p>
      </div>
      <Button variant={"outline"} size={"xl"} className="border-none">
        <div className="flex gap-x-2">
          <Plus />
          <p>افزودن آدرس جدید</p>
        </div>
      </Button>
    </div>
  );
}
