"use client";

/** @format */

import * as React from "react";

import { Slider } from "@/components/ui/slider";

import { toRialMoney } from "../utils";

import { useRouter, useSearchParams } from "next/navigation";

export function SliderFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const minPrice = 1;
  const maxPrice = 7;

  const urlMinPrice = searchParams.get("minPrice");
  const urlMaxPrice = searchParams.get("maxPrice");

  const [price, setPrice] = React.useState<number[]>([
    urlMinPrice ? Number(urlMinPrice) / 1000000 : minPrice,
    urlMaxPrice ? Number(urlMaxPrice) / 1000000 : maxPrice,
  ]);

  React.useEffect(() => {
    setPrice([
      urlMinPrice ? Number(urlMinPrice) / 1000000 : minPrice,
      urlMaxPrice ? Number(urlMaxPrice) / 1000000 : maxPrice,
    ]);
  }, [urlMinPrice, urlMaxPrice]);

  const handlePriceChange = (value: number | readonly number[]) => {
    if (Array.isArray(value)) {
      setPrice([...value]);
    }
  };

  const handlePriceCommit = (value: number | readonly number[]) => {
    if (!Array.isArray(value)) return;

    const params = new URLSearchParams(searchParams.toString());

    const minPrice = value[0] * 1000000;
    const maxPrice = value[1] * 1000000;

    params.set("minPrice", String(minPrice));
    params.set("maxPrice", String(maxPrice));

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-y-6 pt-4">
      <div className=" flex justify-center items-center">
        <div className="flex justify-center items-center gap-x-2 border rounded-md h-8 w-[50%]">
          <p className="text-sm text-gray-700 pt-4">میلیون</p>
          <p className="text-sm text-gray-700">{toRialMoney(price[1] * 1000000)}</p>
        </div>
      </div>

      <Slider
        defaultValue={[6]}
        max={maxPrice}
        step={1}
        value={price}
        id="slider-demo-temperature"
        min={minPrice}
        onValueChange={handlePriceChange}
        onValueCommitted={handlePriceCommit}
        className="mx-auto w-full max-w-xs py-2"
      />

      <div>
        <p className="text-right text-base text-gray-500">محدودیت قیمت از</p>
        <div className="flex justify-between items-center bg-nutral-50 border border-gray-100 rounded-lg px-4">
          <p className="text-gray-900 text-base pt-3">تومان</p>
          <p className="text-gray-900 text-base">{toRialMoney(price[0] * 1000000)}</p>
        </div>
      </div>
      <div className="">
        <p className="text-right text-base text-gray3">محدودیت قیمت تا</p>
        <div className="flex justify-between items-center bg-nutral-50 border border-gray-100 rounded-lg px-4">
          <p className="text-gray-900 text-base pt-3">تومان</p>
          <p className="text-gray-900 text-base">{toRialMoney(price[1] * 1000000)}</p>
        </div>
      </div>
    </div>
  );
}
