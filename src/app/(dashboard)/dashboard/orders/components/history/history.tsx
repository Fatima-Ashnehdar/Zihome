/**@format */

import { Separator } from "@/components/ui/separator";

import { HistoryTitle } from "./title";
import { HistorySelect } from "./select";
import { HistoryTable } from "./table";

export function OrdersHistory() {
  return (
    <div className="border rounded-xl px-5 py-6 bg-white">
      <HistoryTitle />
      <Separator className="my-6" />
      <div className="flex flex-col gap-y-8">
        <HistorySelect />
        <HistoryTable />
      </div>
    </div>
  );
}
