/**@format */

import { Button } from "@/components/ui/button";

import { FilterIcon } from "lucide-react";

import { HistorySelect } from "../dashboard/orders/components/history/select";
import DatePickerSecond from "../dashboard/orders/components/history/datePickerSecond";
import { DatePickerFirst } from "../dashboard/orders/components/history/datePickerFirst";

export function Filter() {
  return (
    <div className="flex items-end gap-x-[6%]">
      <DatePickerFirst />
      <DatePickerSecond />
      <HistorySelect />
      <Button variant={"filter"} size={"xl"} className="px-8">
        <div className="flex gap-x-2">
          <FilterIcon />
          <p>فیلتر</p>
        </div>
      </Button>
    </div>
  );
}
