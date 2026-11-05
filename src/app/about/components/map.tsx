/**@format */

import picture from "@public/pictures/about/world-map-pattern.png";

import Image from "next/image";

export function AboutMap() {
  return (
    <div>
      <Image src={picture} alt="map-picture" className="px-[16%]" />
    </div>
  );
}
