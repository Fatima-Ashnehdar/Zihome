/**@format */

import { mockProductsSimilar } from "../../data/mock-product-details";

import { ProductsList } from "./list";

import { Button } from "@/components/ui/button";

import { ChevronLeft } from "lucide-react";

export function ProductsSimilar() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <p className="text-base text-primary">محصولات مشابه</p>

        <Button variant={"ghost"}>
          <div className="flex items-center gap-x-1">
            <p className="text-xs text-gray-600">مشاهده همه</p>
            <ChevronLeft className="size-3 text-gray-600" />
          </div>
        </Button>
      </div>
      <div>
        <ProductsList products={mockProductsSimilar} />
      </div>
    </div>
  );
}
