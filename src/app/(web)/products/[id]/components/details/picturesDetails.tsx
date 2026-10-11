"use client";

/** @format */

import Image from "next/image";

import { TooltipIcon } from "./tooltipIcon";

import { ImageGallery } from "../modal/imageGallery";

import { useProductIdStore } from "@/store/useProductStore";

export function PicturesDetails() {
  const product = useProductIdStore((state) => state.product);
  if (!product) return null;
  return (
    <div className="flex flex-col gap-y-35 w-[80%]">
      <div className="flex gap-x-2">
        <TooltipIcon />
        <div className="w-full">
          <Image width={300} height={100} alt="product-picture" src={product.photo} />
          {/* {product.images.map((ut) => (
            <Image key={ut.id} width={300} height={100} alt="product-picture" src={ut.url} />
          ))} */}
        </div>
      </div>
      <div className="flex gap-x-3 w-[60%]">
        {product.littlePictures.map((item: any) => (
          <ImageGallery key={item.id} picture={item.picture} images={product.images} />
        ))}
      </div>
    </div>
  );
}
