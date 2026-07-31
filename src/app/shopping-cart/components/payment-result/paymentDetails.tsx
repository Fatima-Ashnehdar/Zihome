/**@format */

import { mockPaymentDetails } from "../../data/mock-shopping-cart";

import { Info } from "lucide-react";

export function PaymentDetails() {
  return (
    <div className="flex flex-col gap-y-5 border rounded-xl py-9 px-7 bg-white">
      <p className="text-base text-gray-900">{mockPaymentDetails.title}</p>
      <div className="flex justify-between">
        {mockPaymentDetails.details.map((item) => (
          <div key={item.id} className="flex items-center gap-x-3">
            <p className="text-base text-gray-600">{item.name}</p>
            <p className="text-base text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-x-3">
        <Info className="size-5 text-red-600" />
        <p className="text-base text-gray-900">{mockPaymentDetails.notice}</p>
      </div>
    </div>
  );
}
