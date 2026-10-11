/**@format */

import { Button } from "@/components/ui/button";

import background from "@public/pictures/home/banner_wooden.png";

import { mockBannerWooden } from "../../data/mock-home";

import { ChevronLeft } from "lucide-react";

export function BannerWooden() {
  return (
    <div
      style={{ backgroundImage: `url(${background.src})` }}
      className="flex flex-col gap-y-10 rounded-xl bg-cover px-10 pt-10 pb-15"
    >
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl text-white">{mockBannerWooden.title}</p>
        <p className="text-base text-white">{mockBannerWooden.paragraph}</p>
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
