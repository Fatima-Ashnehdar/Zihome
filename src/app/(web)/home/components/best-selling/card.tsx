/**@format */

import { ProposalCardProps } from "../../types";

import { StarCheckIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

import Image from "next/image";
import Link from "next/link";

import { toRialMoney } from "@/app/(web)/products/(shop)/utils";

export function ProductCard({
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
      border-2 rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl bg-white px-4 py-2 lg:py-6"
    >
      <div className="flex justify-center">
        <Image
          src={photo}
          width={100}
          height={100}
          alt="photos-recommended-products"
          className="w-68"
        />
      </div>
      <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-6 xl:gap-y-8">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-y-2 pt-1 md:pt-0">
            <p className="text-xs md:text-sm text-gray-700">{title}</p>
            <p className="flex text-[10px] lg:text-xs xl:text-sm text-gray-600">{model}</p>
          </div>
          <div className="hidden sm:flex items-center pt-1 xl:pt-2">
            <p className="text-[10px] lg:text-xs xl:text-sm text-gray-600">{score}</p>
            <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
              <StarCheckIcon
                className="size-3 xl:size-4 text-yellow-700 transition-colors group-aria-pressed/toggle:fill-yellow-700
               group-aria-pressed/toggle:text-yellow-700"
              />
            </Toggle>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-y-1 lg:flex-row justify-between items-end">
          <div className="bg-red-500 px-1.5 md:px-2.5 py-1 lg:py-0 lg:px-3.5 lg:pt-1.5 lg:pb-1 rounded-full shadow-discard">
            <p className="text-xs lg:text-sm text-white">{discount}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs lg:text-sm text-gray-600 line-through">
              {toRialMoney(previousPrice)}
            </p>
            <p className="text-xs md:text-sm lg:text-base text-gray-900">
              {toRialMoney(currentPrice)} تومان
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
