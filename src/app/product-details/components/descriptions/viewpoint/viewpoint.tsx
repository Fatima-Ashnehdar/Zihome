/** @format */

import { PostViewPoint } from "./post";
import { ViewpointList } from "./list";
import { mockViewPoints } from "@/app/product-details/data/mock-product-details";
import { ViewpointsTabs } from "./tabs";

const viewPoints = {
  title: "دیدگاه خریداران",
};

export function Viewpoint() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-gray-50 rounded-2xl px-8 py-4">
        <p className="text-base text-gray-950">{viewPoints.title}</p>
      </div>
      <div>
        <ViewpointsTabs />
      </div>
      <div className="flex gap-x-6">
        <ViewpointList viewPoints={mockViewPoints} />
        <div className="sticky top-0 left-0">
          <PostViewPoint />
        </div>
      </div>
    </div>
  );
}
