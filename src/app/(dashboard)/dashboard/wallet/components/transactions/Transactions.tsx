/**@format */

import { Separator } from "@/components/ui/separator";

import { TransactionsTitle } from "./title";
import { TransactionsTable } from "./table";
import { Filter } from "@/app/(dashboard)/components/filter";

export function WalletTransactions() {
  return (
    <div className="flex flex-col gap-y-6 border rounded-xl px-5 py-5">
      <TransactionsTitle />
      <Separator />
      <Filter />
      <TransactionsTable />
    </div>
  );
}
