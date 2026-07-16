"use client";
/** @format */

import { useState } from "react";
import * as React from "react";

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { PanelRightClose } from "lucide-react";
import { Funnel } from "lucide-react";
import { toRialMoney } from "../utils";

export function ProductSidebar() {
  const [value, setValue] = React.useState<number>(15);
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <Button onClick={() => setIsOpen(true)} variant={"filter"} size={"xl"}>
        <div className="flex items-center gap-x-2">
          <Funnel className="size-5" />
          <p className="text-base">فیلترها</p>
        </div>
      </Button>
    );
  }

  return (
    <div className="rounded-2xl border sticky right-0 top-0 py-5 px-6 flex flex-col gap-y-3 w-74.5 bg-white">
      <div className="pb-2 flex justify-between items-center">
        <p className="text-base text-gray1">فیلتر ها</p>
        <Button variant={"link"} size={"icon-lg"} onClick={() => setIsOpen(false)}>
          <PanelRightClose className="size-6 text-gray3" />
        </Button>
      </div>
      <Separator />
      <Accordion className="w-full flex flex-col gap-y-2">
        <AccordionItem value="item-1" className="pb-2">
          <AccordionTrigger>
            <p className="text-base text-gray1">دسته بندی</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-end gap-x-2 pt-4">
              <p className="text-sm text-gray7">دارای رنگبندی</p>
              <Checkbox
                defaultChecked
                id="filter-color-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
              />
            </div>
            <div className="flex justify-end gap-x-2">
              <p className="text-sm text-gray7">گارانتی</p>
              <Checkbox
                id="filter-warranty-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="pb-2">
          <AccordionTrigger>
            <p className="text-base text-gray1">محدوده قیمت</p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-y-6 pt-4">
              <div className=" flex justify-center items-center">
                <div className="flex justify-center items-center gap-x-2 border rounded-md h-8 w-[50%]">
                  <p className="text-sm text-gray7 pt-4">میلیون</p>
                  <p className="text-sm text-gray7">{toRialMoney(value * 1000000)}</p>
                </div>
              </div>

              <Slider
                defaultValue={[15]}
                max={30}
                step={1}
                value={[value]}
                id="slider-demo-temperature"
                min={0}
                onValueChange={(nextValue) => {
                  const next = Array.isArray(nextValue) ? nextValue[0] : nextValue;
                  if (typeof next === "number") {
                    setValue(next);
                  }
                }}
                className="mx-auto w-full max-w-xs py-2"
              />

              <div>
                <p className="text-right text-base text-gray3">محدودیت قیمت از</p>
                <div className="flex justify-between items-center bg-gray5 border border-gray4 rounded-lg px-4">
                  <p className="text-gray1 text-base pt-3">تومان</p>
                  <p className="text-gray1 text-base">۱.۰۰۰.۰۰۰</p>
                </div>
              </div>
              <div className="">
                <p className="text-right text-base text-gray3">محدودیت قیمت تا</p>
                <div className="flex justify-between items-center bg-gray5 border border-gray4 rounded-lg px-4">
                  <p className="text-gray1 text-base pt-3">تومان</p>
                  <p className="text-gray1 text-base">۱.۰۰۰.۰۰۰</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="-mb-1">
          <AccordionTrigger>
            <p className="text-base text-gray1">برند</p>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex justify-end gap-x-2 pt-4">
              <p className="text-sm text-gray7">تکنو</p>
              <Checkbox
                id="filter-brand-techno-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
              />
            </div>
            <div className="flex justify-end gap-x-2">
              <p className="text-sm text-gray7">دیپوینت</p>
              <Checkbox
                id="filter-brand-dupont-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
              />
            </div>
            <div className="flex justify-end gap-x-2">
              <p className="text-sm text-gray7">تفلون</p>
              <Checkbox
                id="filter-brand-teflon-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
              />
            </div>
            <div className="flex justify-end gap-x-2">
              <p className="text-sm text-gray7">چدن</p>
              <Checkbox
                id="filter-brand-castIron-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
              />
            </div>
            <div className="flex justify-end gap-x-2">
              <p className="text-sm text-gray7">کنوود</p>
              <Checkbox
                id="filter-brand-kenwood-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
      <div className="flex flex-col gap-y-4 pt-1">
        <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
          <p className="text-base text-gray1">فقط کالا های موجود</p>
          <Switch />
        </div>
        <Separator />
        <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
          <p className="text-base text-gray1">کالا های تخفیف دار</p>
          <Switch />
        </div>
        <Separator />
        <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
          <p className="text-base text-gray1">ارسال امروز</p>
          <Switch />
        </div>
      </div>
    </div>
  );
}
