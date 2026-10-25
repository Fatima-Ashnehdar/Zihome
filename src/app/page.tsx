"use client";

import { Hero } from "./home/components/hero/hero";
import { AmazingOfferCards } from "./home/components/proposal/amazingOfferCards";
import { CategoryList } from "./home/components/category/list";
import { BannerCollection } from "./home/components/collection/banner";
import { BestSelling } from "./home/components/best-selling/bestSelling";
import { Blog } from "./home/components/blog/blog";
import { BannerWooden } from "./home/components/wooden/banner-wooden";
import { Popular } from "./home/components/popular/popular";
import { BannerCreditPurchase } from "./home/components/credit-purchase/banner";

import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

import { ProductsAPI } from "./products/(shop)/api/data-products";

export default function Home() {
  const [productsData, setProductsData] = useState([]);

  const searchParams = useSearchParams();

  const sort = searchParams.get("sort");
  const categoryId = "cmtn2zkej000bvtp0w5el41pz";

  useEffect(() => {
    ProductsAPI({
      categoryId,
      sort: sort || undefined,
    }).then(setProductsData);
  }, [sort]);

  return (
    <div className="flex flex-col gap-y-12 py-8 mt-[13%] bg-nutral-50">
      <Hero />
      <div dir="rtl" className="flex flex-col gap-y-15 px-30">
        <AmazingOfferCards />
        <CategoryList />
        <BannerCollection />
        <BestSelling products={productsData} />
        <BannerCreditPurchase />
        <Popular products={productsData} />
        <BannerWooden />
        <Blog />
      </div>
    </div>
  );
}
