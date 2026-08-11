/**@format */

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { KitchenAppliances } from "./content/kitchenAppliances";

import { mockTabsListMenu } from "@/layout/data/mockLayout";

export function HeaderMegaMenuTabs() {
  return (
    <div dir="rtl" className="px-28 py-8">
      <Tabs defaultValue="furniture" orientation="vertical" className="flex gap-x-6">
        <TabsList variant={"line"}>
          <div className="flex flex-col gap-y-2">
            {mockTabsListMenu.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.value}>
                <div className="flex items-center gap-x-2">
                  {tab.icon}
                  <p className="text-base font-normal">{tab.title}</p>
                </div>
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        <Separator orientation="vertical" />
        <TabsContent value={"furniture"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"decoration"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"kitchenAppliances"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"bathroomService"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"lighting"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"organizingSupplies"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"tools"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"garden"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"services"}>
          <KitchenAppliances />
        </TabsContent>
        <TabsContent value={"specialProducts"}>
          <KitchenAppliances />
        </TabsContent>
      </Tabs>
    </div>
  );
}
