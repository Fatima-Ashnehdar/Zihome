/** @format */

import { ViewPointCardProps } from "@/app/product-details/types";

import { toRialMoney } from "@/app/products/utils";

import { Toggle } from "@/components/ui/toggle";

import { StarCheckIcon, ThumbsDown, ThumbsUp, ChevronLeft } from "lucide-react";

export function ViewpointCard({
  name,
  score,
  date,
  opinion,
  answer,
  question,
}: ViewPointCardProps) {
  return (
    <div className="flex flex-col gap-y-8 border rounded-2xl px-6 py-6">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-6">
          <p className="text-sm text-gray-900">{name}</p>
          <p className="text-xs text-gray-600">{date}</p>
        </div>

        <div className="flex">
          <p className="text-xs text-gray-600 pt-1">{toRialMoney(score)} امتیاز</p>
          <div>
            <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
              <StarCheckIcon
                className="size-4 text-yellow-700 transition-colors group-aria-pressed/toggle:fill-yellow-700
               group-aria-pressed/toggle:text-yellow-700"
              />
            </Toggle>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-900">{opinion}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-8">
          <p className="text-xs text-gray-900">{question}</p>
          <div className="flex gap-x-3">
            <div>
              <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
                <ThumbsUp
                  className="size-4 text-gray-600 transition-colors group-aria-pressed/toggle:fill-green-500
               group-aria-pressed/toggle:text-green-500"
                />
              </Toggle>
            </div>
            <div>
              <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
                <ThumbsDown
                  className="size-4 text-gray-600 transition-colors group-aria-pressed/toggle:fill-red-500
               group-aria-pressed/toggle:text-red-500"
                />
              </Toggle>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <p className="text-xs text-gray-800">{answer}</p>
          <ChevronLeft className="size-3 text-gray-600" />
        </div>
      </div>
    </div>
  );
}
