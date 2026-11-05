/**@format */

import Image from "next/image";

import picture from "@public/pictures/contact/contact.jpg";

export function ContactHero() {
  return (
    <div className="w-full">
      <Image src={picture} alt="hero-picture" />
    </div>
  );
}
