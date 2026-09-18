"use client";

/**@format */

import { usePathname } from "next/navigation";

import { ProductTab } from "../components/tabs";
import { CategoryTab } from "../category/components/tabs";

import { mockCategories } from "../category/data/mock-categories";

import { ProductsAPI } from "../api/data-products";
import { useEffect, useState } from "react";

export function LayoutTab() {
  const pathname = usePathname();
  const categoryPage = pathname.includes("/category");

  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    ProductsAPI().then(setProductsData);
  }, []);
  return (
    <div>
      {categoryPage ? (
        <CategoryTab category={productsData} />
      ) : (
        <ProductTab products={productsData} />
      )}
    </div>
  );
}
