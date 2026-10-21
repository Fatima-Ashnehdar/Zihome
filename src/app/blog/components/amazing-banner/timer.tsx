"use client";

/**@format */

import { toRialMoney } from "@/app/products/(shop)/utils";

import { useEffect, useState } from "react";

export function AmazingBannerTimer() {
  const [time, setTime] = useState(3 * 60 * 60 + 34 * 60 + 34);

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
    { id: 1, value: seconds, icon: ":" },
    { id: 2, value: minutes, icon: ":" },
    { id: 3, value: hours },
  ];

  return (
    <div className="flex">
      {timerItems.map((item) => (
        <div key={item.id} className="flex justify-center items-center">
          <p className="text-base text-white pl-5.5">{toRialMoney(item.value)}</p>
          <p className="text-base text-white pl-5.5">{item.icon}</p>
        </div>
      ))}
    </div>
  );
}
