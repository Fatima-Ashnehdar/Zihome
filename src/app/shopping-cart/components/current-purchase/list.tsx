/**@format */

import { ProductsListProps } from "../../types";

import { ProductsCard } from "./card";

export interface ProductsCardProps {
  products: ProductsListProps[];
}

export function ProductsList({ products }: ProductsCardProps) {
  return (
    <div className="flex flex-col gap-y-5 w-full">
      {products.map((product) => (
        <ProductsCard key={product.id} {...product} />
      ))}
    </div>
  );
}
