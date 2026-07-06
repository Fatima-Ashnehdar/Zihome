/** @format */

import { ProductFilter } from "./components/filter";
import { ProductList } from "./components/list";

export default function ProductsPage() {
  return (
    <div>
      <ProductFilter filters={["all", "electronics", "clothing", "books"]} />
      <ProductList
        products={[
          {
            id: "1",
            name: "Product 1",
            price: 100,
            image: "https://picsum.photos/200/300",
          },
          {
            id: "2",
            name: "Product 2",
            price: 200,
            image: "https://picsum.photos/200/300",
          },
          {
            id: "3",
            name: "Product 3",
            price: 300,
            image: "https://picsum.photos/200/300",
          },
        ]}
      />
    </div>
  );
}
