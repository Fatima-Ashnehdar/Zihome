/**@format */

import { Button } from "@/components/ui/button";

import background from "@public/pictures/home/banner-collection.png";

import { ChevronLeft } from "lucide-react";

import { mockBanner } from "../../data/mock-home";

export function BannerCollection() {
  return (
    <div
      style={{ backgroundImage: `url(${background.src})` }}
      className="flex flex-col gap-y-10 rounded-xl bg-cover px-10 pt-10 pb-15"
    >
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl text-white">{mockBanner.title}</p>
        <p className="text-base text-white">{mockBanner.paragraph}</p>
      </div>
      <Button size={"xl"} className="w-fit">
        <div className="flex gap-x-3">
          <p>مشاهده همه</p>
          <ChevronLeft />
        </div>
      </Button>
    </div>
  );
}
