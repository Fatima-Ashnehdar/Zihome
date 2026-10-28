/**@format */

import { Truck } from "lucide-react";

const standardShipping = {
  name: "ارسال عادی",
  paragraph: "بین ۴ الی ۵ روز کاری تحویل می شود",
  icon: <Truck className="size-5 text-gray-500" />,
};

export function StandardShippingTab() {
  return (
    <div className="w-full px-6 py-4">
      <div className="">
        <div className="flex flex-col items-start gap-y-1">
          <div className="flex items-center gap-x-2">
            {standardShipping.icon}
            <p className="text-base text-gray-700 font-normal">{standardShipping.name}</p>
          </div>
          <p className="text-sm text-gray-500 font-normal pr-7 pt-2">
            {standardShipping.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}
