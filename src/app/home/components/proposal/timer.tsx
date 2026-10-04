"use client";

/**@format */

import { useEffect, useState } from "react";

import { ChevronLeft, Sparkles, ClockFading } from "lucide-react";

import { Button } from "@/components/ui/button";

import { toRialMoney } from "@/app/products/(shop)/utils";

export function Timer() {
  const [time, setTime] = useState(18 * 60 * 60 + 13 * 60 + 40);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const timerItems = [
    { id: 1, value: hours, text: "ساعت" },
    { id: 2, value: minutes, text: "دقیقه" },
    { id: 3, value: seconds, text: "ثانیه" },
  ];

  return (
    <div className="flex flex-col gap-y-16 bg-primary rounded-2xl px-7 pt-10 w-177.5">
      <div>
        <Sparkles color="white" />

        <div className="flex flex-col gap-y-2 pr-6">
          <p className="text-2xl text-white">پیشــــــــــنـــــــــــــــــــهاد</p>
          <p className="text-2xl text-white">شگـــــفــــــــت انگیـــــــز</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 relative">
        <Button className="-ml-5">
          <div className="flex gap-x-4">
            <p className="font-normal">مشاهده همه</p>
            <ChevronLeft />
          </div>
        </Button>
        <div className="absolute bg-white px-5 py-3 rounded-t-lg">
          <ClockFading className="text-yellow-500" />
        </div>
        <div className="flex flex-row-reverse gap-x-4 justify-center items-center bg-white rounded-md pb-4 pt-7 ml-5">
          {timerItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-y-1 justify-center items-center bg-gray-50 rounded-md px-2 py-3"
            >
              <p className="text-base text-gray-900">{toRialMoney(item.value)}</p>

              <p className="text-sm text-gray-500 font-normal">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
