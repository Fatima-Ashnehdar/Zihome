/**@format */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { MapPin, Plus } from "lucide-react";

import Image from "next/image";

import { addressRegistration } from "../data/mock-address";

export function AddressRegister() {
  return (
    <div className="border rounded-xl p-5">
      <div className="flex gap-x-2 pb-5">
        <MapPin className="text-gray-600" />
        <p className="text-base text-gray-900">{addressRegistration.title}</p>
      </div>
      <Separator />
      <div className="flex flex-col items-center gap-y-4 py-15">
        <Image src={addressRegistration.picture} alt="picture-map" />
        <p className="text-sm text-gray-800">{addressRegistration.description}</p>
        <Button variant={"outline"} size={"xl"}>
          <div className="flex gap-x-2">
            <Plus />
            <p>افزودن آدرس جدید</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
