"use client";

/** @format */

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ProductList } from "./list";

import { ProductCardProps } from "../types";

import { useRouter, useSearchParams } from "next/navigation";

export interface ProductFilterProps {
  products: ProductCardProps[];
}

export function ProductTab({ products }: ProductFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort") || "decoration";

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };
  return (
    <div>
      <Tabs value={sort} onValueChange={handleSort}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <span className="inline-block w-1 h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl" />
            <TabsList variant="line" className="flex gap-x-8">
              <TabsTrigger value="decoration">
                <p className="text-base"> دکوراسیون</p>
              </TabsTrigger>
              <TabsTrigger value="latest">
                <p className="text-base"> جدیدترین</p>
              </TabsTrigger>
              <TabsTrigger value="best-selling">
                <p className="text-base"> پرفروش ترین</p>
              </TabsTrigger>
              <TabsTrigger value="buyers-recommendations">
                <p className="text-base"> پیشنهاد خریداران</p>
              </TabsTrigger>
            </TabsList>
          </div>
          <p className="text-base text-gray-500">۹۲۶ کالا</p>
        </div>
        <Separator className="mt-1 mb-4" />
        <TabsContent value="decoration">
          <ProductList products={products} />
        </TabsContent>
        <TabsContent value="latest">
          <ProductList products={products} />
        </TabsContent>
        <TabsContent value="best-selling">
          <ProductList products={products} />
        </TabsContent>
        <TabsContent value="buyers-recommendations">
          <ProductList products={products} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
