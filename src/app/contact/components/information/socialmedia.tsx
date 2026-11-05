/**@format */

import { mockSocialMedia } from "../../data/mock-contact";

import Image from "next/image";

export function InformationSocialMedia() {
  return (
    <div className="flex justify-end items-center gap-x-30">
      <p className="text-sm text-gray-900">{mockSocialMedia.title}</p>
      <div className="flex gap-x-1">
        {mockSocialMedia.socialMedia.map((item) => (
          <div key={item.id} className="cursor-pointer">
            <Image src={item.icon} alt="social-media" className="w-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
