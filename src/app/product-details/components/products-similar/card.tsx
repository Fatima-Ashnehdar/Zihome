/**@format */

import Image from "next/image";

import { ProductsSimilarCardProps } from "../../types";

import { Toggle } from "@/components/ui/toggle";

import { StarCheckIcon } from "lucide-react";

import { toRialMoney } from "@/app/products/utils";

export function ProductsCard({
  name,
  score,
  photo,
  model,
  previousPrice,
  currentPrice,
}: ProductsSimilarCardProps) {
  return (
    <div className="flex flex-col gap-y-2 border rounded-lg w-full shadow-card py-6 px-4 cursor-pointer">
      <div>
        <Image alt="" src={photo} />
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-gray-700">{name}</p>
        <div className="flex items-center">
          <p className="text-sm text-gray-600">{toRialMoney(score)}</p>
          <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
            <StarCheckIcon
              className="size-4 text-yellow-700 transition-colors group-aria-pressed/toggle:fill-yellow-700
               group-aria-pressed/toggle:text-yellow-700"
            />
          </Toggle>
        </div>
      </div>
      <p className="text-sm text-gray-700">{model}</p>
      <div className="flex justify-between items-end">
        <div className="bg-red-500 px-3 py-1 rounded-full shadow-discard">
          <p className="text-sm text-white">{toRialMoney(30)}%</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="line-through text-sm text-gray-600">{toRialMoney(previousPrice)}</p>
          <p className="text-base text-gray-900">{toRialMoney(currentPrice)} تومان</p>
        </div>
      </div>
    </div>
  );
}
