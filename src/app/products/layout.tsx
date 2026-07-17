/** @format */

import { ProductSidebar } from "./layout/sidebar";
import { ProductTab } from "./components/tabs";
import { ProductCardProps, CategoryCardProps } from "./types";

import { mockProducts } from "./data/mock-products";
import { ProductDescription } from "./components/description";

export interface ProductPageProps {
  products: ProductCardProps[];
  category: CategoryCardProps[];
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div dir="rtl" className="w-full px-30 py-8 flex flex-col gap-y-12 bg-nutral-50">
      <main className="flex-1">{children}</main>
      <div className="flex justify-between gap-x-7">
        <div>
          <ProductSidebar />
        </div>
        <ProductTab products={mockProducts} />
      </div>
      <ProductDescription />
    </div>
  );
}
