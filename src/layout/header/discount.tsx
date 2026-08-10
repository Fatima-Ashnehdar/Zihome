/**@format */

import { Separator } from "@/components/ui/separator";

import { mockHeaderDiscount } from "../data/mockLayout";

export function HeaderDiscount() {
  return (
    <div className="flex justify-between bg-gray-900 px-30 py-3">
      <div className="flex items-center gap-x-3">
        <p className="text-sm text-white">{mockHeaderDiscount.title}</p>
        <Separator orientation="vertical" />
        <p className="text-sm text-white">{mockHeaderDiscount.free}</p>
      </div>
      <div className="flex items-center gap-x-3">
        <p className="text-sm text-white">{mockHeaderDiscount.discount}</p>
        <Separator orientation="vertical" />
        <p className="text-sm text-white">{mockHeaderDiscount.sell}</p>
      </div>
    </div>
  );
}
