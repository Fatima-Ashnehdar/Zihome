/**@format */

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { mockAbout, mockLogoApp } from "@/layout/data/mockLayout";

import { toRialMoney } from "@/app/products/(shop)/utils";

export function FooterAbout() {
  return (
    <div className="flex flex-col gap-y-5">
      <Image alt="logo-picture" src={mockAbout.picture} className="w-[24%]" />
      <p className="text-base text-gray-900 font-bold">{mockAbout.title}</p>
      <div className="flex flex-col gap-y-2">
        {mockAbout.paragraphLines.map((line) => (
          <p key={line.id} className={line.color}>
            {line.text}
          </p>
        ))}
        <div>
          <Button variant={"ghost"} className="px-0 hover:px-2 hover:py-1">
            <p>مشاهده بیشتر...</p>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <p className="text-sm text-gray-900">تلفن پشتیبانی:</p>
          <p className="text-sm text-gray-900">{toRialMoney(mockAbout.phoneNumber)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-900">{mockAbout.text}</p>
          <div className="flex items-center">
            {mockLogoApp.map((item) => (
              <div key={item.id} className="flex">
                <Image alt="logo" src={item.logo} className="w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
