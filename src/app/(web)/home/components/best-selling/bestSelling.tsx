/**@format */

import { ProposalCardProps } from "../../types";

import { ProductsTab } from "./tabs";
import { ProductsTitle } from "./title";

interface PropsCard {
  products: ProposalCardProps[];
}

export function BestSelling({ products }: PropsCard) {
  return (
    <div className="flex flex-col gap-y-1 md:gap-y-3 xl:gap-y-5">
      <ProductsTitle />
      <ProductsTab products={products} />
    </div>
  );
}
