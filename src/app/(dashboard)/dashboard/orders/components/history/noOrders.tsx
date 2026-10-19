/**@format */

import Image from "next/image";

import { historyNoOrders } from "../../data/mock-orders";

export function HistoryNoOrders() {
  return (
    <div className="flex flex-col items-center gap-y-4 w-full py-5">
      <Image src={historyNoOrders.picture} alt="note" />
      <p className="text-base text-gray-800">{historyNoOrders.title}</p>
    </div>
  );
}
