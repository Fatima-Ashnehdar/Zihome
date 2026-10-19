/**@format */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { PencilLine } from "lucide-react";

import { accountInformation } from "../data/mock-profile";

type AccountInformationProps = {
  onEdit: () => void;
};

export function AccountInformation({ onEdit }: AccountInformationProps) {
  return (
    <div className="flex flex-col gap-y-4 border rounded-xl px-5 py-7">
      <div className="flex justify-between">
        <p>{accountInformation.title}</p>
        <Button variant={"outline"} size={"xl"} onClick={onEdit} className="border-none">
          <div className="flex gap-x-2">
            <PencilLine />
            <p>ویرایش</p>
          </div>
        </Button>
      </div>
      <Separator />
      <div className="grid grid-cols-2">
        {accountInformation.information.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-1.5">
            <p className="text-base text-gray-600">{item.title}</p>
            <p className="text-base text-gray-900">{item.text}</p>
            {item.border && <Separator className="my-4" />}
          </div>
        ))}
      </div>
    </div>
  );
}
