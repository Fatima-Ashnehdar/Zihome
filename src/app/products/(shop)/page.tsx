/** @format */

import { ProductCategory } from "./components/category";

import { mockCategory } from "./data/mock-products";

export default function ProductsPage() {
  return (
    <div dir="rtl" className="py-8 flex flex-col gap-y-12 bg-nutal-50">
      <ProductCategory category={mockCategory} />
    </div>
  );
}
