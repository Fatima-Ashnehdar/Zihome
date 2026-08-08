/**@format */

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { mockConclusion } from "../../data/mock-cart";

import { ChevronDown } from "lucide-react";

export function Conclusion() {
  return (
    <div className="flex flex-col gap-y-4 ">
      <p className="text-base text-gray-950">{mockConclusion.title}</p>
      <div className="flex flex-col gap-y-6 border rounded-xl py-9 px-7 bg-white">
        <div className="flex justify-between">
          {mockConclusion.description.map((item) => (
            <div key={item.id} className="flex items-center gap-x-3">
              {item.icon}
              <p className="text-base text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
        <Separator />
        <Button variant={"ghost"} size={"xl"}>
          <div className="flex items-center gap-x-3">
            <p className="text-blue-800">نمایش جزئیات سفارش</p>
            <ChevronDown className="text-blue-800" />
          </div>
        </Button>
      </div>
    </div>
  );
}
