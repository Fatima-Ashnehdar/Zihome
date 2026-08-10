/**@format */

import { mockFooterFeature, mockFooterSymbols } from "@/layout/data/mockLayout";

import Image from "next/image";

export function FooterSymbols() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-2 bg-white rounded-xl px-16 py-6">
        {mockFooterFeature.map((item) => (
          <div key={item.id} className="flex">
            <div className="flex gap-x-3">
              {item.icon}
              <div className="flex flex-col gap-y-1">
                <p className="text-base text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            </div>
            {item.border && (
              <Image alt="border" src={item.border} className="h-fit w-30 mt-3 mx-6" />
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-x-4 w-[24%]">
        {mockFooterSymbols.map((symbol) => (
          <div key={symbol.id} className="">
            <Image src={symbol.logo} alt="symbol" />
          </div>
        ))}
      </div>
    </div>
  );
}
