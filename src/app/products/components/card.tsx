"use client";
/** @format */

import Image from "next/image";

import { Toggle } from "@/components/ui/toggle";

import { StarCheckIcon } from "lucide-react";

import { ProductCardProps } from "../types";

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
          <h6 className="text-gray7 text-sm">{name}</h6>
          <div className="flex items-end gap-x-0">
            <p className="text-gray8 text-sm">{score}</p>
            <Toggle aria-label="Toggle bookmark" size="sm" variant="default">
              <StarCheckIcon
                className="size-4 text-orange1 transition-colors group-aria-pressed/toggle:fill-orange1
               group-aria-pressed/toggle:text-orange1"
              />
            </Toggle>
          </div>
        </div>
        <p className="text-gray8 text-sm tracking-wide">{model}</p>
        <div className="flex gap-x-0.5 pt-5">
          <span className="bg-gray9 inline-block w-4 h-2 rounded-xl"></span>
          <span className="bg-brown1 inline-block w-4 h-2 rounded-xl"></span>
          <span className="bg-brown2 inline-block w-4 h-2 rounded-xl"></span>
          <span className="bg-gray7 inline-block w-4 h-2 rounded-xl"></span>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <p className="line-through text-gray8 text-sm text-left">{previousPrice}</p>
        <div className="flex justify-between">
          <p className="text-sm text-white bg-red1 rounded-full px-3.5 py-1">{discount}</p>
          <p className="text-gray1 text-base text-left">{currentPrice}</p>
        </div>
      </div>
    </div>
  );
}
