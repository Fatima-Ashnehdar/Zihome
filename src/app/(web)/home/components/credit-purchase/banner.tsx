/**@format */

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

import { mockBannerCreditPurchase } from "../../data/mock-home";

import Link from "next/link";

export function BannerCreditPurchase() {
  return (
    <div className="flex flex-col gap-y-3 sm:flex-row gap-x-3 xl:gap-x-6 aspect-4/1">
      {mockBannerCreditPurchase.description.map((item) =>
        item.direction === "right" ? (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.picture.src})` }}
            className="flex flex-col gap-y-[10%] h-44 xs:h-60 sm:h-full bg-cover w-full px-[5%] sm:px-[2%] lg:px-[4%] py-[6%] sm:py-[3%] 
            rounded-md md:rounded-lg lg:rounded-xl"
          >
            <div className="flex items-center gap-x-2">
              <div className="bg-primary px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-sm lg:rounded-md">
                <p className="text-sm md:text-base text-white">٪</p>
              </div>
              <p className="text-sm xs:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-900">
                {mockBannerCreditPurchase.title}
              </p>
            </div>
            <div>
              <p className="text-xs xs:text-sm sm:text-xs md:text-[13px] lg:text-sm xl:text-base text-gray-900">
                {item.title}
              </p>
              <p className="text-xs xs:text-sm sm:text-xs md:text-[13px] lg:text-sm xl:text-base text-gray-900">
                {item.text}
              </p>
            </div>
            <Link href={`/products/category?categoryId=${item.id}`} className="md:hidden">
              <Button variant={"link"} size="xl" className="w-fit px-0 -mt-4">
                <div className="flex items-center gap-x-1">
                  <p className="text-xs text-gray-100">مشاهده همه</p>
                  <ChevronLeft className="text-gray-100 size-3" />
                </div>
              </Button>
            </Link>
            <Link href={`/products/category?categoryId=${item.id}`} className="hidden md:flex">
              <Button size="xl" className="w-fit px-2 lg:px-5">
                <div className="flex items-start lg:items-center gap-x-1 lg:gap-x-3">
                  <p className="text-xs lg:text-sm">مشاهده همه</p>
                  <ChevronLeft className="size-3 lg:size-4" />
                </div>
              </Button>
            </Link>
          </div>
        ) : (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.picture.src})` }}
            className="flex flex-col items-end gap-y-[10%] h-44 xs:h-60 sm:h-full bg-cover w-full px-[5%] sm:px-[2%] lg:px-[4%] py-[6%] sm:py-[3%]
             rounded-md md:rounded-lg lg:rounded-xl"
          >
            <div className="flex items-center gap-x-2">
              <div className="bg-primary px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-sm lg:rounded-md">
                <p className="text-sm md:text-base text-white">٪</p>
              </div>
              <p className="text-sm xs:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-900">
                {mockBannerCreditPurchase.title}
              </p>
            </div>
            <div>
              <p className="text-xs xs:text-sm sm:text-xs md:text-[13px] lg:text-sm xl:text-base text-gray-900">
                {item.title}
              </p>
              <p className="text-xs xs:text-sm sm:text-xs md:text-[13px] lg:text-sm xl:text-base text-gray-900">
                {item.text}
              </p>
            </div>
            <Link href={`/products/category?categoryId=${item.id}`} className="md:hidden">
              <Button variant={"link"} size="xl" className="w-fit px-0 -mt-4">
                <div className="flex items-center gap-x-1">
                  <p className="text-xs text-gray-100">مشاهده همه</p>
                  <ChevronLeft className="text-gray-100 size-3" />
                </div>
              </Button>
            </Link>
            <Link href={`/products/category?categoryId=${item.id}`} className="hidden md:flex">
              <Button size="xl" className="w-fit px-2 lg:px-5">
                <div className="flex items-start lg:items-center gap-x-1 lg:gap-x-3">
                  <p className="text-xs lg:text-sm">مشاهده همه</p>
                  <ChevronLeft className="size-3 lg:size-4" />
                </div>
              </Button>
            </Link>
          </div>
        ),
      )}
    </div>
  );
}
