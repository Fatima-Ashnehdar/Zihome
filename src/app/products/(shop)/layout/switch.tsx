"use client";

/** @format */

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import { useRouter, useSearchParams } from "next/navigation";

export function SwitchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const inStock = searchParams.get("inStock") === "true";
  const hasDiscount = searchParams.get("hasDiscount") === "true";

  const handleFilter = (filterName: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (checked) {
      params.set(filterName, "true");
    } else {
      params.delete(filterName);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-y-4 pt-1">
      <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
        <p className="text-base text-gray-900">فقط کالا های موجود</p>
        <Switch checked={inStock} onCheckedChange={(checked) => handleFilter("inStock", checked)} />
      </div>
      <Separator />
      <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
        <p className="text-base text-gray-900">کالا های تخفیف دار</p>
        <Switch
          checked={hasDiscount}
          onCheckedChange={(checked) => handleFilter("hasDiscount", checked)}
        />
      </div>
      <Separator />
      <div dir="ltr" className="flex flex-row-reverse justify-between items-center">
        <p className="text-base text-gray-900">ارسال امروز</p>
        <Switch />
      </div>
    </div>
  );
}
