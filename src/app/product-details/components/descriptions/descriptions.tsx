/** @format */

import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { ProductIntroduction } from "./productIntroduction";
import { Viewpoint } from "./viewpoint/viewpoint";
import { Questions } from "./questions/questions";
import { ProductSpecifications } from "./productSpecifications";
import { ProductReview } from "./productReview";

const descriptionsDetails = [
  { id: 1, name: "معرفی", link: "#introduction" },
  { id: 2, name: "مشخصات", link: "#specifications" },
  { id: 3, name: "بررسی تخصصی", link: "#review " },
  { id: 4, name: "دیدگاه ها", link: "#viewpoints" },
  { id: 5, name: "پرسش ها", link: "#questions" },
];

export function Descriptions() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center gap-x-2">
        <span className="inline-block w-1 h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl" />
        <div className="flex gap-x-6">
          {descriptionsDetails.map((item) => (
            <Link key={item.id} href={item.link}>
              <p className="text-sm text-gray-900 hover:text-red-500 cursor-pointer">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-15">
        <div id="introduction">
          <ProductIntroduction />
        </div>
        <Separator className="border border-gray-300" />
        <div id="specifications">
          <ProductSpecifications />
        </div>
        <Separator className="border border-gray-300" />
        <div id="review">
          <ProductReview />
        </div>
        <Separator className="border border-gray-300" />
        <div id="viewpoints">
          <Viewpoint />
        </div>
        <Separator className="border border-gray-300" />
        <div id="questions">
          <Questions />
        </div>
      </div>
    </div>
  );
}
