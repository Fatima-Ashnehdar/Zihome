/**@format */

import { toRialMoney } from "@/app/products/utils";

import { mockSelectDay } from "@/app/shopping-cart/data/mock-shopping-cart";

import { CalendarDays } from "lucide-react";

export function SelectDay() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center gap-x-2">
        <CalendarDays className="size-5 text-gray-600" />
        <p className="text-base text-gray-950">{mockSelectDay.title}</p>
      </div>
      <div className="flex gap-x-5">
        {mockSelectDay.days.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-y-2 border bg-gray-50 rounded-lg px-5 py-4"
          >
            <p className="text-base text-gray-950">{item.day}</p>
            <p className="text-base text-gray-950">{toRialMoney(item.date)}</p>
            <p className="text-sm text-gray-600">{item.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
