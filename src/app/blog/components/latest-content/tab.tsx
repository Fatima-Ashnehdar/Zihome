/**@format */

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Bath, CookingPot, Lamp, Menu, Sofa, Sprout, Tag } from "lucide-react";

import { ContentList } from "./list";

export function ContentTab() {
  return (
    <Tabs defaultValue="decoration" orientation="vertical" className="flex gap-x-5">
      <TabsList
        variant={"default"}
        className="flex flex-col gap-y-5 w-[24%] bg-white px-8 py-4 border rounded-xl"
      >
        <TabsTrigger value="categories" className="border-none py-3.5">
          <div className="flex gap-x-2 px-4">
            <Menu className="size-5" />
            <p>دسته بندی ها</p>
          </div>
        </TabsTrigger>
        <Separator />
        <TabsTrigger value="latest-content" className="border-none py-3.5">
          <div className="flex gap-x-2 px-4">
            <Tag className="size-5" />
            <p>جدیدترین مطالب</p>
          </div>
        </TabsTrigger>
        <Separator />
        <TabsTrigger value="decoration" className="border-none py-3.5">
          <div className="flex gap-x-2 px-4">
            <Sofa className="size-5" />
            <p>دکوراسیون</p>
          </div>
        </TabsTrigger>
        <Separator />
        <TabsTrigger value="lighting" className="border-none py-3.5">
          <div className="flex gap-x-2 px-4">
            <Lamp className="size-5" />
            <p>نور و روشنایی</p>
          </div>
        </TabsTrigger>
        <Separator />
        <TabsTrigger value="garden" className="border-none py-3.5">
          <div className="flex gap-x-2 px-4">
            <Sprout className="size-5" />
            <p>فضای باز و باغچه</p>
          </div>
        </TabsTrigger>
        <Separator />
        <TabsTrigger value="bathroom" className="border-none py-3.5">
          <div className="flex gap-x-2 px-4">
            <Bath className="size-5" />
            <p>سرویس خواب و حمام</p>
          </div>
        </TabsTrigger>
        <Separator />
        <TabsTrigger value="kitchen-appliances" className="border-none py-3.5">
          <div className="flex gap-x-2 px-4">
            <CookingPot className="size-5" />
            <p>لوازم آشپزخانه</p>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="categories">
        <ContentList />
      </TabsContent>
      <TabsContent value="latest-content">
        <ContentList />
      </TabsContent>
      <TabsContent value="decoration">
        <ContentList />
      </TabsContent>
      <TabsContent value="lighting">
        <ContentList />
      </TabsContent>
      <TabsContent value="garden">
        <ContentList />
      </TabsContent>
      <TabsContent value="bathroom">
        <ContentList />
      </TabsContent>
      <TabsContent value="kitchen-appliances">
        <ContentList />
      </TabsContent>
    </Tabs>
  );
}
