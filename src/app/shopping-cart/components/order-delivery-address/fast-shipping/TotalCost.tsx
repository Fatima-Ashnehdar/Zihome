/**@format */

import { toRialMoney } from "@/app/products/utils";

const totalCost = {
  title: "مجموع هزینه ارسال",
  price: 275500,
};

export function TotalCost() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-base text-gray-950">{totalCost.title}</p>
      <p className="text-sm text-gray-600">{toRialMoney(totalCost.price)} تومان</p>
    </div>
  );
}
