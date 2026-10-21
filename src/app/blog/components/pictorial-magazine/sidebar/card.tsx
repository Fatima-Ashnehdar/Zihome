/**@format */

import Image from "next/image";

import { AttractiveCardProps } from "../../../types";

import { ClockPlus, Eye } from "lucide-react";

export function SidebarCard({ id, time, picture, visit, title }: AttractiveCardProps) {
  return (
    <div
      className="flex items-center gap-x-4 shadow-card hover:shadow-card-hover active:shadow-card-active border rounded-xl px-3 py-3 
    cursor-pointer"
    >
      <Image src={picture} alt="attractive-picture" />
      <div className="flex flex-col gap-y-3">
        <p className="text-sm text-gray-900">{title}</p>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1">
            <ClockPlus className="size-4 text-gray-600" />
            <p className="text-xs text-gray-600">{time}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Eye className="size-4 text-gray-600" />
            <p className="text-xs text-gray-600">{visit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
