/**@format */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { inputGroup } from "../data/mock-profile";

export function ProfileInputGroup() {
  return (
    <div className="flex flex-col gap-y-4 border rounded-xl px-5 py-7">
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 ">
        {inputGroup.map((item) => (
          <div key={item.id} className="flex flex-col gap-y-1">
            <p className="text-base text-gray-900">{item.label}</p>
            <Input placeholder={item.text} className="w-full h-11" />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button size={"xl"}>
          <p className="font-normal">اعمال تغییرات</p>
        </Button>
      </div>
    </div>
  );
}
