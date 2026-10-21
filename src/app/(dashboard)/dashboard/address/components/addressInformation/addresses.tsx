/**@format */

import { PencilLine } from "lucide-react";

import { addressInformation } from "../../data/mock-address";

import { Button } from "@/components/ui/button";

export function Addresses() {
  return (
    <div className="flex flex-col gap-y-4">
      {addressInformation.address.map((item) => (
        <div key={item.id} className="flex justify-between border rounded-xl py-6 px-6">
          <div className="flex gap-x-2">
            {item.icon}
            <div className="flex flex-col gap-y-1">
              <p className="text-base text-gray-900">{item.title}</p>
              <p className="text-base text-gray-600">{item.description}</p>
              <p className="text-base text-gray-600">کد پستی {item.postalCode}</p>
              <p className="text-base text-gray-600"> شماره تماس {item.contactNumber}</p>
            </div>
          </div>
          <Button variant={"ghost"} size={"xl"}>
            <div className="flex gap-x-1">
              <PencilLine className="text-blue-600" />
              <p className="text-blue-600">ویرایش</p>
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
}
