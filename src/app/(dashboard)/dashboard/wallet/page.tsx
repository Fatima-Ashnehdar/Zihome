/**@format */

import { WalletAccountBalance } from "./components/accountBalance";
import { WalletTransactions } from "./components/transactions/Transactions";

export default function DashboardWallet() {
  return (
    <div className="flex flex-col gap-y-5">
      <WalletAccountBalance />
      <WalletTransactions />
    </div>
  );
}
