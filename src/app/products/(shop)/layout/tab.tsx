"use client";

/**@format */

import { usePathname } from "next/navigation";

import { ProductTab } from "../components/tabs";
import { CategoryTab } from "../category/components/tabs";

import { mockProducts } from "../data/mock-products";
import { mockCategories } from "../category/data/mock-categories";

export function LayoutTab() {
  const pathname = usePathname();
  const categoryPage = pathname.includes("/category");
  return (
    <div>
      {categoryPage ? (
        <CategoryTab category={mockCategories} />
      ) : (
        <ProductTab products={mockProducts} />
      )}
    </div>
  );
}
