"use client";

/** @format */

import Image from "next/image";

import { TooltipIcon } from "./tooltipIcon";

import { ImageGallery } from "../modal/imageGallery";

import { mockPicturesDetails } from "../../data/mock-product-details";

export function PicturesDetails() {
  return (
    <div className="flex flex-col gap-y-21 w-[80%]">
      <div className="flex gap-x-2">
        <TooltipIcon />
        <div className="w-[70%]">
          <Image alt="product-picture" src={mockPicturesDetails.mainPicture} />
        </div>
      </div>
      <div className="flex gap-x-3 w-[50%]">
        {mockPicturesDetails.littlePictures.map((item) => (
          <ImageGallery picture={item.picture} key={item.id} />
        ))}
      </div>
    </div>
  );
}
