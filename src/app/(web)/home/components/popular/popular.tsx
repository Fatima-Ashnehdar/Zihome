/**@format */

import { ProposalCardProps } from "../../types";

import { PopularTabs } from "./tabs";
import { PopularTitle } from "./title";

interface PropsCard {
  products: ProposalCardProps[];
}

export function Popular({ products }: PropsCard) {
  return (
    <div className="flex flex-col gap-y-1 md:gap-y-3 xl:gap-y-5">
      <PopularTitle />
      <PopularTabs products={products} />
    </div>
  );
}
