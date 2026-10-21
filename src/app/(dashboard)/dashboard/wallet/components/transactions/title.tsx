/**@format */

import { CreditCard } from "lucide-react";

import { transactionTitle } from "../../data/mock-wallet";

export function TransactionsTitle() {
  return (
    <div className="flex items-center gap-x-2">
      <CreditCard className="text-gray-600" />
      <p className="text-base text-gray-900">{transactionTitle.title}</p>
    </div>
  );
}
