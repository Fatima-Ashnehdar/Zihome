"use client";

/**@format */

import { Toggle } from "@/components/ui/toggle";

import { StarCheckIcon } from "lucide-react";

import { SelectBox } from "./selectBox";

import { useProductIdStore } from "@/store/useProductStore";

import { FeaturesDetailsProps, SpecificationProps } from "../../types";

export function FeaturesDetails() {
  const product = useProductIdStore((state) => state.product);

  if (!product) return null;
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <div>
        <div className="flex items-center gap-x-4">
          <p className="text-base text-gray-700">{product.name}</p>
          <div className="flex items-center">
            <p className="text-xs text-gray-500">{product.score} امتیاز</p>
            <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
              <StarCheckIcon
                className="size-4 text-yellow-700 transition-colors group-aria-pressed/toggle:fill-yellow-700
               group-aria-pressed/toggle:text-yellow-700"
              />
            </Toggle>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-base text-gray-900">طرح و رنگبندی</p>
        <div className="flex items-center gap-x-2 bg-gray-100 rounded-full py-1 px-1 w-24">
          <span className="inline-block w-6 h-6 bg-white rounded-full" />
          <p className="text-xs text-gray-700">سفید</p>
        </div>
      </div>
      {product.hasWarranty && (
        <div className="flex flex-col gap-y-3 border-b-2 border-dashed pb-9">
          <p className="text-base text-gray-900">گارانتی</p>
          <SelectBox />
        </div>
      )}
      <div>
        <p className="text-lg text-gray-700">ویژگی های اصلی</p>
        <div className="flex flex-col gap-y-2 pt-3">
          {product.specifications.map((feature: SpecificationProps) => (
            <div
              key={feature.key}
              className="flex items-center gap-x-2 bg-gray-50 rounded-sm px-2 py-1 w-fit"
            >
              <p className="text-sm text-gray-500">{feature.key}</p>
              <p className="text-sm text-gray-900">{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
