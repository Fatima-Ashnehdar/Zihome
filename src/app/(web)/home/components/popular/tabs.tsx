/**@format */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PopularList } from "./list";

export function PopularTabs() {
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
          <TabsTrigger value="light&brightness">
            <p className="text-base">نور و روشنایی</p>
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="decoration">
        <PopularList />
      </TabsContent>
      <TabsContent value="kitchen">
        <PopularList />
      </TabsContent>
      <TabsContent value="electrical-appliances">
        <PopularList />
      </TabsContent>
      <TabsContent value="supplies&equipment">
        <PopularList />
      </TabsContent>
      <TabsContent value="light&brightness">
        <PopularList />
      </TabsContent>
    </Tabs>
  );
}
