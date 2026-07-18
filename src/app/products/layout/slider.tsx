"use client";

/** @format */

import * as React from "react";

import { Slider } from "@/components/ui/slider";

import { toRialMoney } from "../utils";

export function SliderFilter() {
  const [value, setValue] = React.useState<number>(6);

  return (
    <div className="flex flex-col gap-y-6 pt-4">
      <div className=" flex justify-center items-center">
        <div className="flex justify-center items-center gap-x-2 border rounded-md h-8 w-[50%]">
          <p className="text-sm text-gray-700 pt-4">میلیون</p>
          <p className="text-sm text-gray-700">{toRialMoney(value * 1000000)}</p>
        </div>
      </div>

      <Slider
        defaultValue={[6]}
        max={12}
        step={1}
        value={[value]}
        id="slider-demo-temperature"
        min={0}
        onValueChange={(nextValue) => {
          const next = Array.isArray(nextValue) ? nextValue[0] : nextValue;
          if (typeof next === "number") {
            setValue(next);
          }
        }}
        className="mx-auto w-full max-w-xs py-2"
      />

      <div>
        <p className="text-right text-base text-gray-500">محدودیت قیمت از</p>
        <div className="flex justify-between items-center bg-nutral-50 border border-gray-100 rounded-lg px-4">
          <p className="text-gray-900 text-base pt-3">تومان</p>
          <p className="text-gray-900 text-base">{toRialMoney(1000000)}</p>
        </div>
      </div>
      <div className="">
        <p className="text-right text-base text-gray3">محدودیت قیمت تا</p>
        <div className="flex justify-between items-center bg-nutral-50 border border-gray-100 rounded-lg px-4">
          <p className="text-gray-900 text-base pt-3">تومان</p>
          <p className="text-gray-900 text-base">{toRialMoney(12000000)}</p>
        </div>
      </div>
    </div>
  );
}
