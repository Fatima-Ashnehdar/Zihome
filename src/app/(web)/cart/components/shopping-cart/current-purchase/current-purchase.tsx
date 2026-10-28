/**@format */

import { Insurance } from "./insurance";
import { TotalPrice } from "./totalPrice";
import { ProductsList } from "./list";

import { mockProducts } from "../../../data/mock-cart";

export function CurrentPurchase() {
  return (
    <div className="flex gap-x-5 py-6">
      <ProductsList products={mockProducts} />
      <div className="flex flex-col gap-y-4 w-[35%]">
        <Insurance />
        <TotalPrice />
      </div>
    </div>
  );
}
