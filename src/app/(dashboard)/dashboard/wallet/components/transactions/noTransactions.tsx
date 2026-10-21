/**@format */

import Image from "next/image";

import { noTransaction } from "../../data/mock-wallet";

export function NoTransactions() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 py-15">
      <Image src={noTransaction.picture} alt="picture-transaction" />
      <p className="text-base text-gray-900">{noTransaction.title}</p>
    </div>
  );
}
