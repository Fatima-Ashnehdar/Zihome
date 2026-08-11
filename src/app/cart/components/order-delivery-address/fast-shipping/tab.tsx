/**@format */

import { MapPin } from "lucide-react";

const fastShipping = {
  name: "ارسال اکسپرس و سریع",
  paragraph: "تحویل سریع در کمتر از ۳ ساعت در روز جاری",
  icon: <MapPin className="size-5 text-gray-500" />,
};

export function FastShippingTab() {
  return (
    <div className="w-full px-6 py-4">
      <div className="">
        <div className="flex flex-col items-start gap-y-1">
          <div className="flex items-center gap-x-2">
            {fastShipping.icon}
            <p className="text-base text-gray-700 font-normal">{fastShipping.name}</p>
          </div>
          <p className="text-sm text-gray-500 font-normal pr-7 pt-2">{fastShipping.paragraph}</p>
        </div>
      </div>
    </div>
  );
}
