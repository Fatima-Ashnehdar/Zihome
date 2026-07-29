/**@format */

import { mockDisabledTabs } from "@/app/shopping-cart/data/mock-shopping-cart";

export function DisabledTabs() {
  return (
    <div className="flex justify-between gap-x-5">
      {mockDisabledTabs.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 bg-gray-50 px-6 py-4 rounded-xl w-full"
        >
          <div className="flex items-center gap-x-2">
            {item.icon}
            <p className="text-base text-gray-400">{item.name}</p>
          </div>
          <p className="text-sm text-gray-400 pr-7 pt-2">{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
