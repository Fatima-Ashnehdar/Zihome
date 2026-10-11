/** @format */

import { ProductSidebar } from "./layout/sidebar";

import { ProductCardProps, CategoryCardProps } from "./types";

import { ProductDescription } from "./components/description";
import { LayoutTab } from "./layout/tab";

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
      <div className="flex gap-x-7 w-full">
        <div>
          <ProductSidebar />
        </div>
        <div className="w-full">
          <LayoutTab />
        </div>
      </div>
      <ProductDescription />
    </div>
  );
}
