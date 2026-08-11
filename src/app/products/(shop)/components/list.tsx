/** @format */
import { ProductCardProps } from "../types";
import { ProductCard } from "./card";

export interface ProductListProps {
  products: ProductCardProps[];
}
export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
