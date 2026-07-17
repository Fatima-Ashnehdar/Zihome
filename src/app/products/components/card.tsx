"use client";
/** @format */

import Image from "next/image";

import { Toggle } from "@/components/ui/toggle";

import { StarCheckIcon } from "lucide-react";

import { ProductCardProps } from "../types";

import { toRialMoney } from "../utils";

export function ProductCard({
  name,
  photo,
  score,
  model,
  previousPrice,
  currentPrice,
  discount,
}: ProductCardProps) {
  return (
    <div
      className="flex flex-col gap-7 justify-center items-center max-w-sm shadow-card border-2 rounded-xl px-4 py-6 bg-white 
       hover:shadow-card-hover cursor-pointer"
    >
      <div className="w-[85%]">
        <Image className="w-full object-cover" src={photo} alt={name} width={100} height={100} />
      </div>
      <div className="flex flex-col gap-y-1 w-full">
        <div className="flex justify-between">
          <h6 className="text-gray-700 text-sm">{name}</h6>
          <div className="flex items-end gap-x-0">
            <p className="text-gray-600 text-sm">{score}</p>
            <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
              <StarCheckIcon
                className="size-4 text-yellow-700 transition-colors group-aria-pressed/toggle:fill-yellow-700
               group-aria-pressed/toggle:text-yellow-700"
              />
            </Toggle>
          </div>
        </div>
        <p className="text-gray-600 text-sm tracking-wide">{model}</p>
        <div className="flex gap-x-0.5 pt-5">
          <span className="bg-gray-500 inline-block w-4 h-2 rounded-xl"></span>
          <span className="bg-brown-200 inline-block w-4 h-2 rounded-xl"></span>
          <span className="bg-brown-600 inline-block w-4 h-2 rounded-xl"></span>
          <span className="bg-gray-700 inline-block w-4 h-2 rounded-xl"></span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <p className="line-through text-gray-600 text-sm text-left">{toRialMoney(previousPrice)}</p>
        <div className="flex justify-between">
          <p className="text-sm text-white bg-red-500 rounded-full px-3.5 py-1">{discount}</p>
          <p className="text-gray-900 text-base text-left">{toRialMoney(currentPrice)}</p>
        </div>
      </div>
    </div>
  );
}
