/** @format */

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function SwitchFilter() {
  return (
    <div className="flex flex-col gap-y-4 pt-1">
      <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
        <p className="text-base text-gray-900">فقط کالا های موجود</p>
        <Switch />
      </div>
      <Separator />
      <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
        <p className="text-base text-gray-900">کالا های تخفیف دار</p>
        <Switch />
      </div>
      <Separator />
      <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
        <p className="text-base text-gray-900">ارسال امروز</p>
        <Switch />
      </div>
    </div>
  );
}
