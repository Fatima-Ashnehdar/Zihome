/**@format */

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

import { mockBannerCreditPurchase } from "../../data/mock-home";

export function BannerCreditPurchase() {
  return (
    <div className="flex gap-x-6">
      {mockBannerCreditPurchase.description.map((item) =>
        item.direction === "right" ? (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.picture.src})` }}
            className="flex flex-col gap-y-5 bg-cover w-full h-91 px-12 py-10 rounded-xl"
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
            <Button size="xl" className="w-fit">
              <div className="flex gap-x-3">
                <p>مشاهده همه</p>
                <ChevronLeft />
              </div>
            </Button>
          </div>
        ) : (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.picture.src})` }}
            className="flex flex-col items-end gap-y-5 bg-cover w-full h-91 px-12 py-10 rounded-xl"
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
            <Button size="xl" className="w-fit">
              <div className="flex gap-x-3">
                <p>مشاهده همه</p>
                <ChevronLeft />
              </div>
            </Button>
          </div>
        ),
      )}
    </div>
  );
}
