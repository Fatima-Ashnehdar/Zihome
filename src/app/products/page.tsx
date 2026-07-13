/** @format */

import { ProductCategory } from "./components/category";
import { ProductTab } from "./components/tabs";
import { ProductDescription } from "./components/description";
import { ProductSidebar } from "./components/sidebar";

import { ProductCardProps, CategoryCardProps } from "./types";

import { mockCategory, mockProducts } from "./data/mock-products";

export interface ProductPageProps {
  products: ProductCardProps[];
  category: CategoryCardProps[];
}
export default function ProductsPage() {
  return (
    <div dir="rtl" className="px-30  py-8 flex flex-col gap-y-12 bg-gray10">
      <ProductCategory category={mockCategory} />
      <div className="flex justify-between gap-x-7">
        <div>
          <ProductSidebar />
        </div>
        <div className="w-full">
          <ProductTab products={mockProducts} />
        </div>
      </div>
      <ProductDescription />
    </div>
  );
}
