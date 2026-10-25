/**@format */

import { ProposalCardProps } from "../../types";

import { PopularCard } from "./card";

interface PopularListProps {
  products: ProposalCardProps[];
}

export function PopularList({ products }: PopularListProps) {
  return (
    <div className="flex gap-x-6">
      {products.map((product) => (
        <div key={product.id} className="w-full">
          <PopularCard {...product} />
        </div>
      ))}
    </div>
  );
}
