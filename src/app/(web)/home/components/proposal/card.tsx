/**@format */

import Image from "next/image";

import { ProposalCardProps } from "../../types";

import { StarCheckIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

import { toRialMoney } from "@/app/(web)/products/(shop)/utils";

import Link from "next/link";

export function ProposalCard({
  id,
  photo,
  title,
  score,
  model,
  discount,
  previousPrice,
  currentPrice,
}: ProposalCardProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="flex flex-col w-full gap-y-2 md:gap-y-4 hover:shadow-card-hover active:shadow-card-active cursor-pointer shadow-card 
    border-2 rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl bg-white px-4 py-3 md:py-6"
    >
      <Image src={photo} alt="photos-recommended-products" />
      <div className="flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-12 xl:gap-y-14">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-y-2 pt-1 md:pt-0">
            <p className="text-xs lg:text-sm text-gray-700">{title}</p>
            <p className="hidden lg:flex text-xs md:text-[13px] xl:text-sm text-gray-600">
              {model}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-xs lg:text-sm text-gray-600">{score}</p>
            <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
              <StarCheckIcon
                className="size-3 lg:size-4 text-yellow-700 transition-colors group-aria-pressed/toggle:fill-yellow-700
               group-aria-pressed/toggle:text-yellow-700"
              />
            </Toggle>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-y-1 lg:flex-row justify-between items-end">
          <div className="bg-red-500 px-1.5 md:px-2.5 py-1 lg:py-0 lg:px-3.5 lg:pt-1.5 lg:pb-1 rounded-lg md:rounded-full shadow-discard">
            <p className="text-xs lg:text-sm text-white">{discount}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs lg:text-sm text-gray-600 line-through">
              {toRialMoney(previousPrice)}
            </p>
            <p className="text-xs lg:text-sm text-gray-900">{toRialMoney(currentPrice)} تومان</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
