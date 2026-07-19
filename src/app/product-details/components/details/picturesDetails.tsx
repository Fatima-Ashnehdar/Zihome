"use client";

/** @format */

import Image from "next/image";

import { TooltipIcon } from "./tooltipIcon";

import picture1 from "../../../../../public/pictures/details/main-pic.png";
import picture2 from "../../../../../public/pictures/details/pic-58.png";
import picture3 from "../../../../../public/pictures/details/pic-59.png";
import picture4 from "../../../../../public/pictures/details/pic-60.png";
import picture5 from "../../../../../public/pictures/details/pic-61.png";

export function PicturesDetails() {
  const pictures = [
    {
      id: 1,
      picture: picture2,
    },
    {
      id: 2,
      picture: picture3,
    },
    {
      id: 3,
      picture: picture4,
    },
    {
      id: 4,
      picture: picture5,
    },
  ];
  return (
    <div className="flex flex-col gap-y-21 w-[80%]">
      <div className="flex gap-x-2">
        <TooltipIcon />
        <div className="w-[70%]">
          <Image alt="product-picture" src={picture1} />
        </div>
      </div>
      <div className="flex gap-x-3 w-[20%]">
        {pictures.map((picture) => (
          <Image
            key={picture.id}
            alt="product-picture"
            src={picture.picture}
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
