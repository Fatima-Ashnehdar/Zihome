/**@format */

import Image from "next/image";

import { ContentCardProps } from "../../types";

export function ContentCard({ id, picture, title, paragraph, data, icon }: ContentCardProps) {
  return (
    <div className="border shadow-card w-fit rounded-xl bg-white hover:shadow-card-hover active:shadow-card-active cursor-pointer">
      <Image src={picture} alt="blog-card-picture" />
      <div className="flex flex-col gap-y-4 px-4 py-4">
        <div className="flex flex-col gap-y-2">
          <p className="text-sm text-gray-900">{title}</p>
          <p className="text-xs text-gray-600">{paragraph}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">{data}</p>
          {icon}
        </div>
      </div>
    </div>
  );
}
