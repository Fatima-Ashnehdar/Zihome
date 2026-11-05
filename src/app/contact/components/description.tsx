/**@format */

import { HouseHeart } from "lucide-react";

import { mockContactZiHome } from "../data/mock-contact";

export function ContactDescription() {
  return (
    <div className="flex flex-col gap-y-14">
      <div className="flex gap-x-1">
        <p className="text-base text-gray-500">{mockContactZiHome.name}</p>
        <p className="text-base text-gray-900">{mockContactZiHome.category}</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <HouseHeart className="text-primary" />
          <p className="text-xl text-primary">{mockContactZiHome.title}</p>
        </div>
        <p className="text-base text-gray-700">{mockContactZiHome.text}</p>
      </div>
    </div>
  );
}
