/**@format */

import { Separator } from "@/components/ui/separator";

import { HistoryTitle } from "./title";
import { HistoryTable } from "./table";
import { Filter } from "../../../../components/filter";

export function OrdersHistory() {
  return (
    <div className="border rounded-xl px-5 py-6 bg-white">
      <HistoryTitle />
      <Separator className="my-6" />
      <div className="flex flex-col gap-y-8">
        <Filter />
        <HistoryTable />
      </div>
    </div>
  );
}
