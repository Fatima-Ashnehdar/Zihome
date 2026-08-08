/** @format */

import { ViewPointCardProps } from "@/app/product-details/types/index";
import { ViewpointCard } from "./card";

export interface ViewPointCard {
  viewPoints: ViewPointCardProps[];
}
export function ViewpointList({ viewPoints }: ViewPointCard) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {viewPoints.map((viewPoint) => (
        <ViewpointCard key={viewPoint.id} {...viewPoint} />
      ))}
    </div>
  );
}
