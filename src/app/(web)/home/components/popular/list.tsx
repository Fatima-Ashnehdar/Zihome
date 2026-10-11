/**@format */

import { mockPopular } from "../../data/mock-home";

import { PopularCard } from "./card";

export function PopularList() {
  return (
    <div className="flex gap-x-6">
      {mockPopular.products.map((product) => (
        <PopularCard key={product.id} {...product} />
      ))}
    </div>
  );
}
