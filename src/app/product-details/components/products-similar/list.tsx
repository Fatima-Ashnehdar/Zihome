/**@format */

import { ProductsSimilarCardProps } from "../../types";
import { ProductsCard } from "./card";

export interface ProductsSimilarProps {
  products: ProductsSimilarCardProps[];
}

export function ProductsList({ products }: ProductsSimilarProps) {
  return (
    <div className="flex gap-x-6">
      {products.map((product) => (
        <ProductsCard key={product.id} {...product} />
      ))}
    </div>
  );
}
