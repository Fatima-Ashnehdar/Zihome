"use client";

/** @format */

import { Checkbox } from "@/components/ui/checkbox";

import { useRouter, useSearchParams } from "next/navigation";

export function CheckBoxCategory() {
  const checkboxCategory = [
    { id: 1, category: "دارای رنگبندی", idCheckBox: "filter-color-checkbox" },
    { id: 2, category: "گارانتی", idCheckBox: "filter-warranty-checkbox" },
  ];
  return (
    <div className="pt-6 flex flex-col gap-y-2">
      {checkboxCategory.map((item) => (
        <div key={item.id} className="flex justify-end gap-x-2 ">
          <p className="text-sm text-gray-700">{item.category}</p>
          <Checkbox id={item.idCheckBox} name="finder-pref-9k2-external-disks-1yg-checkbox" />
        </div>
      ))}
    </div>
  );
}

export function CheckBoxBrand() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const checkBoxBrand = [
    {
      id: "cmtn2zkdt0000vtp023oiox2r",
      brand: "تکنو",
      idCheckBox: "filter-brand-techno-checkbox",
    },
    {
      id: "cmtn2zkdx0001vtp0rtfnvngm",
      brand: "دیپوینت",
      idCheckBox: "filter-brand-depoint-checkbox",
    },
    {
      id: "cmtn2zkdz0002vtp0h3fx4kj4",
      brand: "تفلون",
      idCheckBox: "filter-brand-teflon-checkbox",
    },
    {
      id: "cmtn2zke00003vtp0mj2i1nw9",
      brand: "چدن",
      idCheckBox: "filter-brand-castIron-checkbox",
    },
    {
      id: "cmtn2zke20004vtp01v6wmp9l",
      brand: "کنوود",
      idCheckBox: "filter-brand-kenwood-checkbox",
    },
    {
      id: "cmtn2zke80007vtp05mlekesv",
      brand: "سامسونگ",
      idCheckBox: "filter-brand-samsung-checkbox",
    },
    {
      id: "cmtn2zke60006vtp0tk0r2y5n",
      brand: "ال جی",
      idCheckBox: "filter-brand-lG-checkbox",
    },
    {
      id: "cmtn2zke40005vtp0j97162gk",
      brand: "فیلیپس",
      idCheckBox: "filter-brand-philips-checkbox",
    },
  ];

  const handleBrand = (brandId: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (checked) {
      params.set("brandId", brandId);
    } else {
      params.delete("brandId");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="pt-6 flex flex-col gap-y-2">
      {checkBoxBrand.map((item) => (
        <div key={item.id} className="flex justify-end gap-x-2">
          <p className="text-sm text-gray-700">{item.brand}</p>

          <Checkbox
            id={item.id}
            checked={searchParams.get("brandId") === item.id}
            onCheckedChange={(checked) => handleBrand(item.id, checked === true)}
          />
        </div>
      ))}
    </div>
  );
}
