/** @format */
import Image from "next/image";

import { CategoryCardProps } from "../types";
import Link from "next/link";

export function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <Link
      href="/products/category"
      className="flex flex-col justify-center items-center gap-y-4 border-2 rounded-2xl w-full py-4 cursor-pointer shadow-card bg-white
      hover:shadow-card-hover active:shadow-card-active"
    >
      {image && (
        <div>
          <Image quality={100} width={180} height={180} alt={name} src={image} />
        </div>
      )}
      <h6 className="text-gray2 text-base">{name}</h6>
    </Link>
  );
}
