/**@format */

import Image from "next/image";
import Link from "next/link";

import { CategoryCardProps } from "../../types";

export function CategoryCard({ title, picture, id }: CategoryCardProps) {
  return (
    <Link
      href={`/products/category?categoryId=${id}`}
      className="flex flex-col gap-y-3 items-center border shadow-card hover:shadow-card-hover active:shadow-card-active
             cursor-pointer rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl py-5 sm:py-6 w-full"
    >
      <Image alt="category-picture" src={picture} className="w-[60%]" />
      <p className="text-xs sm:text-sm lg:text-base text-gray-900">{title}</p>
    </Link>
  );
}
