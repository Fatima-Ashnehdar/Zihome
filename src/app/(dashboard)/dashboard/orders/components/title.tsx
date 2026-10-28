/**@format */

import Image from "next/image";

import { mockOrdersTitle } from "../data/mock-orders";

export function OrdersTitle() {
  return (
    <div className="flex justify-between border rounded-xl pr-5 pl-15 py-6 bg-white">
      {mockOrdersTitle.map((item) => (
        <div key={item.id} className="flex items-center gap-x-4">
          <Image src={item.picture} alt="orders-picture" />
          <div className="flex flex-col gap-y-2">
            <p className="text-base text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600">{item.order}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
