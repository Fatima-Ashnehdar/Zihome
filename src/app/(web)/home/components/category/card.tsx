/**@format */

import Image from "next/image";

import { CategoryCardProps } from "../../types";

export function CategoryCard({ title, picture }: CategoryCardProps) {
  return (
    <div
      className="flex flex-col gap-y-3 items-center border shadow-card hover:shadow-card-hover active:shadow-card-active
             cursor-pointer rounded-2xl py-6"
    >
      <Image alt="category-picture" src={picture} className="w-[60%]" />
      <p className="text-base text-gray-900">{title}</p>
    </div>
  );
}
