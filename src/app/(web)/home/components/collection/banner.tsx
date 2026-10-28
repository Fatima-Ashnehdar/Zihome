/**@format */

import { Button } from "@/components/ui/button";

import background from "@public/pictures/home/banner-collection.png";

import { ChevronLeft } from "lucide-react";

import { mockBanner } from "../../data/mock-home";

import Link from "next/link";

export function BannerCollection() {
  return (
    <div
      style={{ backgroundImage: `url(${background.src})` }}
      className="flex flex-col gap-y-[34%] rounded-xl bg-cover bg-center bg-accent-foreground px-[4%] py-[2%] aspect-5/1"
    >
      <div className="flex flex-col gap-y-3">
        <p className="text-2xl text-white">{mockBanner.title}</p>
        <p className="text-base text-white">{mockBanner.paragraph}</p>
      </div>
      <Link href={"/products/category?categoryId=cmtn2zkef0009vtp0lv5qbowp"}>
        <Button size={"xl"} className="w-fit">
          <div className="flex gap-x-3">
            <p>مشاهده همه</p>
            <ChevronLeft />
          </div>
        </Button>
      </Link>
    </div>
  );
}
