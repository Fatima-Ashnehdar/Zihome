/**@format */

import { Button } from "@/components/ui/button";

import { mockLayoutBanner } from "../data/mock-blog";

import { ChevronLeft } from "lucide-react";

export function LayoutBanner() {
  return (
    <div
      style={{ backgroundImage: `url(${mockLayoutBanner.picture.src})` }}
      className="flex flex-col gap-y-10 bg-cover rounded-xl px-28 py-15"
    >
      <div className="flex flex-col gap-y-2">
        <p className="text-2xl text-white">{mockLayoutBanner.title}</p>
        <p className="text-base text-white">{mockLayoutBanner.text}</p>
      </div>
      <Button size={"xl"} className="w-fit">
        <div className="flex gap-x-1">
          <p>مشاهده همه</p>
          <ChevronLeft />
        </div>
      </Button>
    </div>
  );
}
