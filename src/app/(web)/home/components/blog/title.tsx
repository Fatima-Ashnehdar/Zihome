/**@format */

import { mockBlog } from "../../data/mock-home";

import { ChevronLeft } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function BlogTitle() {
  return (
    <div className="flex items-center justify-between gap-x-1 sm:gap-x-3 lg:gap-x-5">
      <p className="text-sm sm:text-base text-primary">{mockBlog.title}</p>
      <Separator className="hidden xs:flex flex-1" />
      <Link href={"/blog"}>
        <Button variant={"link"} className="shrink-0 px-0">
          <div className="flex items-center gap-x-1">
            <p className="text-xs sm:text-sm">مشاهده همه</p>
            <ChevronLeft className="size-3 sm:size-5" />
          </div>
        </Button>
      </Link>
    </div>
  );
}
