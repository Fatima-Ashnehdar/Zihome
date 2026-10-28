"use client";

/**@format */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PopularList } from "./list";

import { useRouter, useSearchParams } from "next/navigation";

import { ProposalCardProps } from "../../types";

interface ProposalProps {
  products: ProposalCardProps[];
}

export function PopularTabs({ products }: ProposalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort") || "decoration";

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <Tabs value={sort} onValueChange={handleSort}>
      <div className="flex items-center gap-x-2 mb-6">
        <span className="inline-block w-1 h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl" />
        <TabsList variant="line" className="flex gap-x-8">
          <TabsTrigger value="decoration">
            <p className="text-base"> دکوراسیون</p>
          </TabsTrigger>
          <TabsTrigger value="latest">
            <p className="text-base">جدیدترین</p>
          </TabsTrigger>
          <TabsTrigger value="best-selling">
            <p className="text-base">پرفروش ترین</p>
          </TabsTrigger>
          <TabsTrigger value="buyers-recommendations">
            <p className="text-base">پیشنهاد خریداران</p>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="decoration">
        <PopularList products={products} />
      </TabsContent>
      <TabsContent value="latest">
        <PopularList products={products} />
      </TabsContent>
      <TabsContent value="best-selling">
        <PopularList products={products} />
      </TabsContent>
      <TabsContent value="buyers-recommendations">
        <PopularList products={products} />
      </TabsContent>
    </Tabs>
  );
}
