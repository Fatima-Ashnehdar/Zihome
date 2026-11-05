/**@format */

import Image from "next/image";

import picture from "@public/pictures/about/about-us.jpg";

export function AboutHero() {
  return (
    <div className="w-full">
      <Image src={picture} alt="hero-picture" />
    </div>
  );
}
