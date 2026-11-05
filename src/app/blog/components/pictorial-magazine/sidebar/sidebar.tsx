/**@format */

import { ChevronLeft } from "lucide-react";

import { SidebarList } from "./list";
import { SidebarTitle } from "./title";

import { Button } from "@/components/ui/button";

export function MagazineSidebar() {
  return (
    <div className="flex flex-col gap-y-5 border rounded-xl w-[44%] bg-white px-6 py-3.5">
      <SidebarTitle />
      <SidebarList />
      <Button variant={"link"} className="flex justify-end">
        <div className="flex gap-x-1">
          <p>مشاهده همه</p>
          <ChevronLeft />
        </div>
      </Button>
    </div>
  );
}
