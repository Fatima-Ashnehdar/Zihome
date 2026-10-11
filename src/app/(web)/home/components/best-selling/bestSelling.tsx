/**@format */

import { ProductsTab } from "./tabs";
import { ProductsTitle } from "./title";

export function BestSelling() {
  return (
    <div className="flex flex-col gap-y-5">
      <ProductsTitle />
      <ProductsTab />
    </div>
  );
}
