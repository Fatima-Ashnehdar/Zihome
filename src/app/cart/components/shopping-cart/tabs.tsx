/**@format */

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { NextPurchase } from "./next-purchase/next-purchase";
import { CurrentPurchase } from "./current-purchase/current-purchase";

export function ShoppingCartTabs() {
  return (
    <Tabs defaultValue="current-purchase" className="w-full">
      <TabsList variant="line" className="flex justify-between">
        <div className="flex gap-x-5 justify-between">
          <TabsTrigger value="current-purchase">
            <p className="text-base">خرید فعلی شما </p>
          </TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="next-purchase">
            <p className="text-base">خرید بعدی شما</p>
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="current-purchase">
        <CurrentPurchase />
      </TabsContent>
      <TabsContent value="next-purchase">
        <NextPurchase />
      </TabsContent>
    </Tabs>
  );
}
