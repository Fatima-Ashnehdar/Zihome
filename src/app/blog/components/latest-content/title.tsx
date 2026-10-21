/**@format */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ChevronLeft } from "lucide-react";

export function ContentTitle() {
  return (
    <div className="absolute w-[73%] top-3 flex items-center gap-x-5">
      <p className="text-base text-primary text-nowrap">جدیدترین مطالب</p>
      <Separator className="flex-1" />
      <Button variant={"link"} className="shrink-0">
        <div className="flex gap-x-1">
          <p>مشاهده همه</p>
          <ChevronLeft />
        </div>
      </Button>
    </div>
  );
}
