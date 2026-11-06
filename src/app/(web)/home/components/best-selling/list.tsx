/**@format */

import { ProposalCardProps } from "../../types";

import { ProductCard } from "./card";

interface PropsCard {
  products: ProposalCardProps[];
}

export function ProductsList({ products }: PropsCard) {
  return (
    <div
      className="flex gap-x-3 xl:gap-x-6 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0
        scrollbar [&::-webkit-scrollbar]:hidden md:overflow-visible"
    >
      {products.map((product) => (
        <div key={product.id} className="w-38 xs:w-[35%] md:w-full md:contents shrink-0">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
