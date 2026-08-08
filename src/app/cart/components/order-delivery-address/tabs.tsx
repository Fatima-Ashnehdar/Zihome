/**@format */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StandardShippingTab } from "./standard-shipping/tab";
import { FastShippingTab } from "./fast-shipping/tab";
import { FastShipping } from "./fast-shipping/fastShipping";
import { StandardShipping } from "./standard-shipping/standardShipping";

export function TabsSendPost() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="fast-shipping" className="flex flex-col gap-y-15">
        <TabsList variant={"default"} className="flex gap-x-6 w-full bg-white">
          <TabsTrigger value="fast-shipping">
            <FastShippingTab />
          </TabsTrigger>
          <TabsTrigger value="standard-shipping">
            <StandardShippingTab />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="fast-shipping">
          <FastShipping />
        </TabsContent>
        <TabsContent value="standard-shipping">
          <StandardShipping />
        </TabsContent>
      </Tabs>
    </div>
  );
}
