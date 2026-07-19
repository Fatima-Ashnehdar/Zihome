/**@format */

import { Toggle } from "@/components/ui/toggle";

import { StarCheckIcon } from "lucide-react";

import { SelectBox } from "./selectBox";

import { toRialMoney } from "@/app/products/utils";

export function FeaturesDetails() {
  const features = {
    title: "پلوپز ۸ نفره پارس خزر مدل Tyan-181",
    score: 3.4,
    color: "طرح و رنگ بندی",
    warranty: "گارانتی",
    mainFeatures: "ویژگی های اصلی",
  };

  const mainFeatures = [
    { id: 1, name: "ظرفیت", capacity: "۱.۸ لیتر" },
    { id: 2, name: "ظرفیت به نفر", capacity: "۸ نفره" },
    { id: 3, name: "جنس", capacity: "تفلون" },
  ];

  return (
    <div className="flex flex-col gap-y-6 w-full">
      <div>
        <div className="flex items-center gap-x-4">
          <p className="text-base text-gray-700">{features.title}</p>
          <div className="flex items-center">
            <p className="text-xs text-gray-500">{toRialMoney(features.score)} امتیاز</p>
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
        <p className="text-base text-gray-900">{features.color}</p>
        <div className="flex items-center gap-x-2 bg-gray-100 rounded-full py-1 px-1 w-24">
          <span className="inline-block w-6 h-6 bg-white rounded-full"></span>
          <p className="text-xs text-gray-700">سفید</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 border-b-2 border-dashed pb-9">
        <p className="text-base text-gray-900">{features.warranty}</p>
        <SelectBox />
      </div>
      <div>
        <p className="text-lg text-gray-700">{features.mainFeatures}</p>
        <div className="flex flex-col gap-y-2 pt-3">
          {mainFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-x-2 bg-gray-50 rounded-sm px-2 py-1 w-fit"
            >
              <p className="text-sm text-gray-500">{feature.name}</p>
              <p className="text-sm text-gray-900">{feature.capacity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
