/**@format */

import bannerWooden from "@public/pictures/home/banner_wooden.png";
import bannerMobile from "@public/pictures/home/banner-wooden-mobile.png";

import Link from "next/link";
import Image from "next/image";

export function BannerWooden() {
  return (
    <div>
      <Link href={"/products/category?categoryId=cmtn2zkej000bvtp0w5el41pz"}>
        <Image
          src={bannerWooden}
          alt="banner_wooden"
          className="hidden md:flex rounded-lg aspect-5/1 lg:rounded-xl xl:rounded-2xl w-full"
        />
        <Image alt="banner_wooden" src={bannerMobile} className="md:hidden rounded-md" />
      </Link>
    </div>
  );
}
