/** @format */

import { useProductIdStore } from "@/store/useProductStore";
import { ViewPointCardProps } from "../../../types";

import { ViewpointCard } from "./card";

export interface ViewPointCard {
  viewPoints: ViewPointCardProps[];
}
export function ViewpointList() {
  const product = useProductIdStore((state) => state.product);
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {product?.reviews.map((viewPoint) => (
        <ViewpointCard key={viewPoint.id} {...viewPoint} />
      ))}
    </div>
  );
}
