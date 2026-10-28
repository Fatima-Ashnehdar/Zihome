/**@format */

import { ProposalCardProps } from "../../types";

import { ProductCard } from "./card";

interface PropsCard {
  products: ProposalCardProps[];
}

export function ProductsList({ products }: PropsCard) {
  return (
    <div className="flex gap-x-6">
      {products.map((product) => (
        <div key={product.id} className="w-full">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}
