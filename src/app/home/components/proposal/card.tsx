/**@format */

import Image from "next/image";

import { ProposalCardProps } from "../../types";

import { toRialMoney } from "@/app/products/(shop)/utils";

import { StarCheckIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ProposalCard({
  picture,
  title,
  score,
  model,
  discount,
  previousPrice,
  currentPrice,
}: ProposalCardProps) {
  return (
    <div
      className="flex flex-col gap-y-4 hover:shadow-card-hover active:shadow-card-active cursor-pointer shadow-card 
    border-2 rounded-2xl bg-white px-4 py-6"
    >
      <Image src={picture} alt="photos-recommended-products" />
      <div className="flex flex-col gap-y-14">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-y-2">
            <p className="text-sm text-gray-700">{title}</p>
            <p className="text-sm text-gray-600">{model}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-600">{score}</p>
            <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
              <StarCheckIcon
                className="size-4 text-yellow-700 transition-colors group-aria-pressed/toggle:fill-yellow-700
               group-aria-pressed/toggle:text-yellow-700"
              />
            </Toggle>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className=" bg-red-500 px-3.5 pt-1.5 pb-1 rounded-full shadow-discard">
            <p className="text-sm text-white">{discount}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm text-gray-600 line-through">{toRialMoney(previousPrice)}</p>
            <p className="text-base text-gray-900">{toRialMoney(currentPrice)} تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}
