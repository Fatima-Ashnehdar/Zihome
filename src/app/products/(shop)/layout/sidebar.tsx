"use client";
/** @format */

import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PanelRightClose } from "lucide-react";
import { Funnel } from "lucide-react";

import { CheckBoxBrand, CheckBoxCategory } from "./checkbox";
import { SwitchFilter } from "./switch";
import { SliderFilter } from "./slider";

export function ProductSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="">
        <Button onClick={() => setIsOpen(true)} variant={"filter"} size={"xl"}>
          <div className="flex items-center gap-x-2">
            <Funnel className="size-5" />
            <p className="text-base text-white">فیلترها</p>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="sticky right-0 top-10 rounded-2xl border py-5 px-6 flex flex-col gap-y-3 w-74.5 bg-white">
      <div className="pb-2 flex justify-between items-center">
        <p className="text-base text-gray-900">فیلتر ها</p>
        <Button variant={"link"} size={"icon-lg"} onClick={() => setIsOpen(false)}>
          <PanelRightClose className="size-6 text-gray3" />
        </Button>
      </div>
      <Separator />
      <Accordion className="w-full flex flex-col gap-y-2">
        <AccordionItem value="item-1" className="pb-2">
          <AccordionTrigger>
            <p className="text-base text-gray-900">دسته بندی</p>
          </AccordionTrigger>
          <AccordionContent>
            <CheckBoxCategory />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="pb-2">
          <AccordionTrigger>
            <p className="text-base text-gray-900">محدوده قیمت</p>
          </AccordionTrigger>
          <AccordionContent>
            <SliderFilter />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="-mb-1">
          <AccordionTrigger>
            <p className="text-base text-gray-900">برند</p>
          </AccordionTrigger>
          <AccordionContent>
            <CheckBoxBrand />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
      <SwitchFilter />
    </div>
  );
}
