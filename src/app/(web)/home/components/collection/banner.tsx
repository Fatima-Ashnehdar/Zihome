/**@format */

import bannerCollection from "@public/pictures/home/banner-collection.png";
import bannerMobile from "@public/pictures/home/banner-collection-mobile.png";

import Link from "next/link";
import Image from "next/image";

export function BannerCollection() {
  return (
    <Link href={"/products"}>
      <Image
        src={bannerCollection}
        alt="banner_collection"
        className="hidden md:flex rounded-lg aspect-5/1 lg:rounded-xl w-full xl:rounded-2xl"
      />
      <Image src={bannerMobile} alt="banner_collection" className="md:hidden rounded-md" />
    </Link>
  );
}
