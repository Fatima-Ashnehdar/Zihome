/** @format */

// TODO: wire filters & tab sorting

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CategoriesCardProps } from "../types/index";
import { CategoryList } from "./list";

export interface CategoriesFilterProps {
  category: CategoriesCardProps[];
}

export function CategoryTab({ category }: CategoriesFilterProps) {
  return (
    <div>
      <Tabs defaultValue="decoration">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <span className="inline-block w-1 h-10 bg-red1 rounded-tr-4xl rounded-br-4xl"></span>
            <TabsList variant="line" className="flex gap-x-8">
              <TabsTrigger value="decoration">
                <p className="text-base font-normal text-gary1"> دکوراسیون</p>
              </TabsTrigger>
              <TabsTrigger value="latest">
                <p className="text-base font-normal text-gary1"> جدیدترین</p>
              </TabsTrigger>
              <TabsTrigger value="best-selling">
                <p className="text-base font-normal text-gary1"> پرفروش ترین</p>
              </TabsTrigger>
              <TabsTrigger value="buyers-recommendations">
                <p className="text-base font-normal text-gary1"> پیشنهاد خریداران</p>
              </TabsTrigger>
            </TabsList>
          </div>
          <p className="text-base text-gray3">۹۲۶ کالا</p>
        </div>
        <Separator className="mt-1 mb-4" />
        <TabsContent value="decoration">
          <CategoryList category={category} />
        </TabsContent>
        <TabsContent value="latest">
          <CategoryList category={category} />
        </TabsContent>
        <TabsContent value="best-selling">
          <CategoryList category={category} />
        </TabsContent>
        <TabsContent value="buyers-recommendations">
          <CategoryList category={category} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
