/**@format */

import Image from "next/image";

import { mockMagazineBlog } from "../../data/mock-blog";

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

export function Magazine() {
  return (
    <div className="border rounded-xl bg-white">
      <Image src={mockMagazineBlog.picture} alt="magazine-picture" className="w-full" />
      <div className="flex flex-col gap-y-3 px-5 pb-5 pt-7">
        <p className="text-sm text-gray-900"> {mockMagazineBlog.title}</p>
        <p className="text-sm text-gray-900">{mockMagazineBlog.description}</p>
        <div className="flex justify-between">
          <p className="text-xs text-gray-500">{mockMagazineBlog.data}</p>
          <Button variant={"link"} size={"xl"}>
            <div className="flex gap-x-1">
              <p>مشاهده همه</p>
              <ChevronLeft />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
