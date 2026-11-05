/**@format */

import { mockAmazingBanner } from "../../data/mock-blog";

import { AmazingBannerTimer } from "./timer";

export function AmazingBanner() {
  return (
    <div className="flex gap-x-6">
      {mockAmazingBanner.map((item) => (
        <div
          key={item.id}
          style={{ backgroundImage: `url(${item.picture.src})` }}
          className="flex flex-col gap-y-5 w-full rounded-xl px-10 pt-10 pb-5 bg-cover cursor-pointer"
        >
          <div className="flex gap-x-3">
            {item.icon}
            <p className="text-xl text-white font-black">{item.title}</p>
          </div>
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-1">
              <p className="text-base text-white">{item.text}</p>
              <p className="text-base text-white">{item.paragraph}</p>
            </div>
            <p className="text-base text-white">{item.description}</p>
          </div>
          <AmazingBannerTimer />
        </div>
      ))}
    </div>
  );
}
