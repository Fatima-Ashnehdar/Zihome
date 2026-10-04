/**@format */

import { mockBestSelling } from "../../data/mock-home";

import { ProductCard } from "./card";

export function ProductsList() {
  return (
    <div className="flex gap-x-6">
      {mockBestSelling.products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
