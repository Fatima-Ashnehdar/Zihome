/**@format */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ProductsList } from "./list";

import { useRouter, useSearchParams } from "next/navigation";

import { ProposalCardProps } from "../../types";

interface ProposalProps {
  products: ProposalCardProps[];
}

export function ProductsTab({ products }: ProposalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get("sort") || "decoration";

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Tabs value={sort} onValueChange={handleSort}>
      <div className="flex items-center gap-x-2 mb-1 md:mb-2 lg:mb-4 2xl:mb-6">
        <span className="inline-block w-1 h-8 xs:h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl" />
        <div
          className="min-w-0 flex-1 overflow-x-auto
          scrollbar [&::-webkit-scrollbar]:hidden"
        >
          <TabsList variant="line" className="flex sm:gap-x-6 md:gap-x-8">
            <TabsTrigger value="decoration">
              <p className="text-[13px] sm:text-sm lg:text-base"> دکوراسیون</p>
            </TabsTrigger>
            <TabsTrigger value="latest">
              <p className="text-[13px] sm:text-sm lg:text-base">جدیدترین</p>
            </TabsTrigger>
            <TabsTrigger value="best-selling">
              <p className="text-[13px] sm:text-sm lg:text-base">پرفروش ترین</p>
            </TabsTrigger>
            <TabsTrigger value="buyers-recommendations">
              <p className="text-[13px] sm:text-sm lg:text-base">پیشنهاد خریداران</p>
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      <TabsContent value="decoration">
        <ProductsList products={products} />
      </TabsContent>
      <TabsContent value="latest">
        <ProductsList products={products} />
      </TabsContent>
      <TabsContent value="best-selling">
        <ProductsList products={products} />
      </TabsContent>
      <TabsContent value="buyers-recommendations">
        <ProductsList products={products} />
      </TabsContent>
    </Tabs>
  );
}
