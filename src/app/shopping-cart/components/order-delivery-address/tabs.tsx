/**@format */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StandardShippingTab } from "./standard-shipping/tab";
import { FastShippingTab } from "./fast-shipping/tab";

export function TabsSendPost() {
  return (
    <div>
      <Tabs defaultValue="fast-shipping">
        <TabsList variant={"default"} className="flex gap-x-6 w-full bg-white">
          <TabsTrigger value="fast-shipping">
            <FastShippingTab />
          </TabsTrigger>
          <TabsTrigger value="standard-shipping">
            <StandardShippingTab />
          </TabsTrigger>
        </TabsList>
        <div>کامپوننت مشترک</div>
        <TabsContent value="standard-shipping">standardShipping</TabsContent>
        <TabsContent value="fast-shipping">fastShipping</TabsContent>
      </Tabs>
    </div>
  );
}
