/**@format */

import { Globe } from "lucide-react";

import { mockAboutZiHome } from "../data/mock-about";

export function AboutStory() {
  return (
    <div className="flex flex-col gap-y-14">
      <div className="flex gap-x-1">
        <p className="text-base text-gray-500">{mockAboutZiHome.name}</p>
        <p className="text-base text-gray-900">{mockAboutZiHome.category}</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <Globe className="text-primary" />
          <p className="text-xl text-primary">{mockAboutZiHome.title}</p>
        </div>
        <div className="flex flex-col gap-y-5">
          {mockAboutZiHome.paragraphs.map((item) => (
            <p key={item.id} className="text-base text-gray-900">
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
