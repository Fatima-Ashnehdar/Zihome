/**@format */

import Image from "next/image";

import { BlogCardProps } from "../../types";

export function BlogCard({ question, description, picture, date, icon }: BlogCardProps) {
  return (
    <div className="shadow-card hover:shadow-card-hover active:shadow-card-active cursor-pointer border rounded-2xl">
      <Image src={picture} alt="blog-picture" className="rounded-t-3xl" />
      <div className="flex flex-col gap-y-5 px-3 py-5">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-gray-900">{question}</p>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">{date}</p>
          {icon}
        </div>
      </div>
    </div>
  );
}
