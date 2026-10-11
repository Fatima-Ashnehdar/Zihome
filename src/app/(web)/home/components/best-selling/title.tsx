/**@format */

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { mockBestSelling } from "../../data/mock-home";

import { ChevronLeft } from "lucide-react";

export function ProductsTitle() {
  return (
    <div className="flex items-center gap-x-5">
      <p className="text-base text-primary">{mockBestSelling.title}</p>
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
