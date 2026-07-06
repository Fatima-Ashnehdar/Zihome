/** @format */

import { ProductCardProps } from "../types";
import { ProductCard } from "./card";
import { toRialMoney } from "../utils";
export interface ProductListProps {
  products: ProductCardProps[];
}
export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex justify-end relative">{toRialMoney(100)}</div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
