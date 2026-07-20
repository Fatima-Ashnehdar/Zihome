/**@format */

import { toRialMoney } from "@/app/products/utils";

import { Button } from "@/components/ui/button";

const viewPointTabs = [
  { id: 1, name: "جدیدترین دیدگاه ها" },
  { id: 2, name: "دیدگاه های دارای امتیاز بالا" },
  { id: 3, name: "دیدگاه های حاوی تصاویر" },
];

export function ViewpointsTabs() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <span className="inline-block w-1 h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl" />
        <div className="flex gap-x-6">
          {viewPointTabs.map((item) => (
            <Button key={item.id} variant={"ghost"}>
              <p className="text-sm font-normal hover:text-red-500">{item.name}</p>
            </Button>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-950">{toRialMoney(85)} دیدگاه</p>
    </div>
  );
}
