/**@format */

import { Button } from "@/components/ui/button";

import { AttractiveList } from "./list";
import { MostAttractiveTitle } from "./title";

import { ChevronLeft } from "lucide-react";

export function MostAttractive() {
  return (
    <div className="flex flex-col gap-y-5 border rounded-xl w-[24%] absolute top-[50.5%] bg-white px-6 py-3.5">
      <MostAttractiveTitle />
      <AttractiveList />
      <Button variant={"link"} className="flex justify-end">
        <div className="flex gap-x-1">
          <p>مشاهده همه</p>
          <ChevronLeft />
        </div>
      </Button>
    </div>
  );
}
