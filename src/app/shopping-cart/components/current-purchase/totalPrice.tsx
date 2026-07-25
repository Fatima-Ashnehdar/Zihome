/**@format */

import { toRialMoney } from "@/app/products/utils";

import { mockTotalPrice } from "../../data/mock-shopping-cart";

import { Button } from "@/components/ui/button";

export function TotalPrice() {
  return (
    <div className="border border-gray-200 rounded-2xl px-5 py-14 bg-whit">
      {mockTotalPrice.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <p className={`text-sm ${item.color ? "text-gray-900" : "text-green-700"}`}>
            {item.name}
          </p>
          <p className={`text-sm ${item.color ? "text-gray-900" : "text-green-700"}`}>
            {toRialMoney(item.price)}
          </p>
        </div>
      ))}
      <Button variant={"shoppingCard"} size={"xl"}>
        <p>تایید و ادامه خرید</p>
      </Button>
    </div>
  );
}
