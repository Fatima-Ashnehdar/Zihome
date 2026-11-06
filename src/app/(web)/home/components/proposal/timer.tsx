"use client";

/**@format */

import { useEffect, useState } from "react";

import { ChevronLeft, Sparkles, ClockFading } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toRialMoney } from "@/app/(web)/products/(shop)/utils";

import Link from "next/link";

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
    { id: 1, value: hours, text: "ساعت", icon: true },
    { id: 2, value: minutes, text: "دقیقه", icon: true },
    { id: 3, value: seconds, text: "ثانیه" },
  ];

  return (
    <div
      className="flex flex-col gap-y-1 items-center xs:flex xs:flex-row xs:justify-between md:justify-stretch md:flex-col xs:gap-y-[20%] md:gap-y-[10%] 
      lg:gap-y-[19%] xl:gap-y-[18%] bg-primary rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl sm:py-[8%] xs:pb-[1%] sm:pb-[3%] lg:pb-0 px-5 
      md:px-10 lg:px-5 2xl:px-7 pt-[3%] xs:pt-[1%] sm:pt-[3%] md:w-[25%] lg:w-[24%] xl:w-177.5"
    >
      <div className="flex flex-col justify-center">
        <Sparkles color="white" className="size-3 xs:size-4 md:size-5 2xl:size-7" />
        <div className="flex gap-x-2 xs:flex-col  md:flex-col gap-y-2 pr-4 lg:pr-6">
          <p className="text-xs xs:text-base sm:text-lg xl:text-xl 2xl:text-2xl text-white">
            پیشــــــــــنـــــــــــــــــــهاد
          </p>
          <p className="text-xs xs:text-base sm:text-lg xl:text-xl 2xl:text-2xl text-white">
            شگـــــفــــــــت انگیـــــــز
          </p>
        </div>
      </div>

      <div className="flex items-start sm:items-center md:items-stretch xs:flex-col sm:flex-row md:flex-col lg:gap-y-2 relative">
        <Link href={"/products"}>
          <Button className="lg:pr-[30%] 2xl:pr-[25%]">
            <div className="flex items-center gap-x-1 xs:gap-x-2 xl:gap-x-4">
              <p className="text-[10px] sm:text-sm font-normal">مشاهده همه</p>
              <ChevronLeft className="size-3 xs:size-4" />
            </div>
          </Button>
        </Link>
        <div className="hidden lg:flex absolute bg-white px-[5%] pb-[10%] xl:pb-[9%] pt-[8%] xl:pt-[5%] rounded-t-lg">
          <ClockFading className="text-yellow-500 size-5 xl:size-6" />
        </div>
        <div
          className="flex flex-row-reverse gap-x-3 md:gap-x-[5%] lg:gap-x-3 xl:gap-x-4 justify-center items-center xs:px-10 sm:px-12 md:px-0 lg:px-10 sm:bg-white 
          md:bg-transparent lg:bg-white rounded-md pb-4 pt-1 sm:pt-4 2xl:pt-7 2xl:ml-5"
        >
          {timerItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:gap-y-1 justify-center items-center bg-gray-50 rounded-sm sm:rounded-md w-9 xs:w-fit xs:px-[7%] lg:px-[3%] xl:px-[4%] 
              py-1 xs:py-2 sm:py-3"
            >
              <p className="text-xs xs:text-sm xl:text-base text-gray-900">
                {toRialMoney(item.value)}
              </p>

              <p className="hidden xs:flex text-xs xl:text-sm text-gray-500 font-normal">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
