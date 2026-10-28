"use client";

/**@format */

import { usePathname, useSearchParams } from "next/navigation";

import { ProductTab } from "../components/tabs";
import { CategoryTab } from "../category/components/tabs";

import { ProductsAPI } from "../api/data-products";

import { useEffect, useState } from "react";

export function LayoutTab() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryPage = pathname.includes("/category");
  const categoryId = searchParams.get("categoryId");
  const brandId = searchParams.get("brandId");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const sort = searchParams.get("sort");
  const inStock = searchParams.get("inStock");
  const hasDiscount = searchParams.get("hasDiscount");
  const search = searchParams.get("search");

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    ProductsAPI({
      categoryId: categoryId || undefined,
      brandId: brandId || undefined,
      sort: sort || undefined,
      inStock: inStock === "true" ? true : undefined,
      hasDiscount: hasDiscount === "true" ? true : undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      search: search || undefined,
    }).then(setProductsData);
  }, [categoryId, brandId, minPrice, maxPrice, sort, inStock, hasDiscount, search]);

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
