/**@format */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ProductsList } from "./list";

export function ProductsTab() {
  return (
    <Tabs defaultValue="decoration">
      <div className="flex items-center gap-x-2 mb-6">
        <span className="inline-block w-1 h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl" />
        <TabsList variant="line" className="flex gap-x-8">
          <TabsTrigger value="decoration">
            <p className="text-base"> دکوراسیون</p>
          </TabsTrigger>
          <TabsTrigger value="kitchen">
            <p className="text-base">آشپزخانه</p>
          </TabsTrigger>
          <TabsTrigger value="electrical-appliances">
            <p className="text-base">لوازم برقی</p>
          </TabsTrigger>
          <TabsTrigger value="supplies&equipment">
            <p className="text-base">لوازم و تجهیزات</p>
          </TabsTrigger>
          <TabsTrigger value="home-accessories">
            <p className="text-base">اکسسوری منزل</p>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="decoration">
        <ProductsList />
      </TabsContent>
      <TabsContent value="kitchen">
        <ProductsList />
      </TabsContent>
      <TabsContent value="electrical-appliances">
        <ProductsList />
      </TabsContent>
      <TabsContent value="supplies&equipment">
        <ProductsList />
      </TabsContent>
      <TabsContent value="home-accessories">
        <ProductsList />
      </TabsContent>
    </Tabs>
  );
}
