/**@format */

import { toRialMoney } from "@/app/(web)/products/(shop)/utils";

import { accountBalance } from "../data/mock-wallet";

import { ModalWalletActivation } from "./modal/walletActivation";
import { ModalIncreaseBalance } from "./modal/increaseBalance";

export function WalletAccountBalance() {
  return (
    <div className="flex justify-between items-center border rounded-xl px-5 py-4">
      <div className="flex items-center gap-x-8">
        <p className="text-base text-gray-800">{accountBalance.title}</p>
        <p className="text-sm text-gray-600">{toRialMoney(accountBalance.balance)} تومان </p>
      </div>
      <div className="flex gap-x-4">
        <ModalIncreaseBalance />
        <ModalWalletActivation />
      </div>
    </div>
  );
}
