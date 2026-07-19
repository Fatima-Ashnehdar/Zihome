"use client";

/** @format */

import { useRef } from "react";

import { Separator } from "@/components/ui/separator";

import { ProductIntroduction } from "./productIntroduction";
import { Viewpoint } from "./viewpoint/viewpoint";
import { Questions } from "./questions/questions";
import { ProductSpecifications } from "./productSpecifications";
import { ProductReview } from "./productReview";

import { Button } from "@/components/ui/button";

export function Descriptions() {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const fourthRef = useRef<HTMLDivElement>(null);
  const fiveRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const descriptionsDetails = [
    { id: 1, name: "معرفی", ref: firstRef },
    { id: 2, name: "مشخصات", ref: secondRef },
    { id: 3, name: "بررسی تخصصی", ref: thirdRef },
    { id: 4, name: "دیدگاه ها", ref: fourthRef },
    { id: 5, name: "پرسش ها", ref: fiveRef },
  ];
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center gap-x-2">
        <span className="inline-block w-1 h-10 bg-red-500 rounded-tr-4xl rounded-br-4xl"></span>
        <div className="flex gap-x-6">
          {descriptionsDetails.map((item) => (
            <Button variant={"ghost"} onClick={() => scrollToSection(item.ref)} key={item.id}>
              <p className="text-sm text-gray-900 hover:text-red-500 cursor-pointer">{item.name}</p>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-15">
        <div ref={firstRef}>
          <ProductIntroduction />
        </div>
        <Separator className="border border-gray-300" />
        <div ref={secondRef}>
          <ProductSpecifications />
        </div>
        <Separator className="border border-gray-300" />
        <div ref={thirdRef}>
          <ProductReview />
        </div>
        <Separator className="border border-gray-300" />
        <div ref={fourthRef}>
          <Viewpoint />
        </div>
        <Separator className="border border-gray-300" />
        <div ref={fiveRef}>
          <Questions />
        </div>
      </div>
    </div>
  );
}
