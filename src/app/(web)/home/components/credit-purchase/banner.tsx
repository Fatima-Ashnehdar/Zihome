/**@format */

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

import { mockBannerCreditPurchase } from "../../data/mock-home";

import Link from "next/link";

export function BannerCreditPurchase() {
  return (
    <div className="flex gap-x-6 aspect-4/1">
      {mockBannerCreditPurchase.description.map((item) =>
        item.direction === "right" ? (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.picture.src})` }}
            className="flex flex-col gap-y-[10%] bg-cover w-full px-[4%] py-[3%] rounded-xl"
          >
            <div className="flex items-center gap-x-2">
              <div className="bg-primary px-2.5 py-1 rounded-md">
                <p className="text-white">٪</p>
              </div>

              <p className="text-2xl text-gray-900">{mockBannerCreditPurchase.title}</p>
            </div>
            <div>
              <p className="text-base text-gray-900">{item.title}</p>
              <p className="text-base text-gray-900">{item.text}</p>
            </div>
            <Link href={`/products/category?categoryId=${item.id}`}>
              <Button size="xl" className="w-fit">
                <div className="flex gap-x-3">
                  <p>مشاهده همه</p>
                  <ChevronLeft />
                </div>
              </Button>
            </Link>
          </div>
        ) : (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.picture.src})` }}
            className="flex flex-col items-end gap-y-[10%] bg-cover w-full px-[4%] py-[3%] rounded-xl"
          >
            <div className="flex items-center gap-x-2">
              <div className="bg-primary px-2.5 py-1 rounded-md">
                <p className="text-white">٪</p>
              </div>
              <p className="text-2xl text-gray-900">{mockBannerCreditPurchase.title}</p>
            </div>
            <div>
              <p className="text-base text-gray-900">{item.title}</p>
              <p className="text-base text-gray-900">{item.text}</p>
            </div>
            <Link href={`/products/category?categoryId=${item.id}`}>
              <Button size="xl" className="w-fit">
                <div className="flex gap-x-3">
                  <p>مشاهده همه</p>
                  <ChevronLeft />
                </div>
              </Button>
            </Link>
          </div>
        ),
      )}
    </div>
  );
}
