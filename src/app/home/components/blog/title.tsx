/**@format */

import { mockBlog } from "../../data/mock-home";

import { ChevronLeft } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function BlogTitle() {
  return (
    <div className="flex items-center gap-x-5">
      <p className="text-base text-primary">{mockBlog.title}</p>
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
