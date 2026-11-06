/**@format */

import { mockFooterFeature, mockFooterSymbols } from "@/layout/data/mockLayout";

import Image from "next/image";

export function FooterSymbols() {
  return (
    <div className="flex flex-col gap-y-3 lg:flex-row items-center gap-x-[2%] 2xl:gap-x-[2%]">
      <div className="grid grid-cols-2 gap-y-4 xs:flex gap-x-6 sm:gap-x-10 md:gap-x-2 xs:bg-white rounded-md md:rounded-lg lg:rounded-xl xl:rounded-xl xs:px-4 xl:px-6 2xl:px-16 xs:py-6 pb-3">
        {mockFooterFeature.map((item) => (
          <div key={item.id} className="flex">
            <div className="flex gap-x-2 xl:gap-x-3">
              {item.icon}
              <div className="flex flex-col xs:gap-y-1">
                <p className="text-[11px] xs:text-xs xl:text-sm 2xl:text-base text-gray-900">
                  {item.title}
                </p>
                <p className="text-[10px] xl:text-xs 2xl:text-sm text-gray-500">{item.text}</p>
              </div>
            </div>
            {item.border && (
              <Image
                alt="border"
                src={item.border}
                className="h-fit hidden md:flex w-20 2xl:w-30 mt-3 mx-6"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-x-3 lg:gap-x-2 xl:gap-x-4 w-[70%] sm:w-[50%] lg:w-[28%] xl:w-[26%] 2xl:w-[24%]">
        {mockFooterSymbols.map((symbol) => (
          <div key={symbol.id}>
            <Image src={symbol.logo} alt="symbol" />
          </div>
        ))}
      </div>
    </div>
  );
}
