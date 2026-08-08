/** @format */

import { Checkbox } from "@/components/ui/checkbox";

export function CheckBoxBrand() {
  const checkBoxBrand = [
    { id: 1, brand: "تکنو", idCheckBox: "filter-brand-techno-checkbox" },
    { id: 2, brand: "دیپوینت", idCheckBox: "filter-brand-dupont-checkbox" },
    { id: 3, brand: "تفلون", idCheckBox: "filter-brand-teflon-checkbox" },
    { id: 4, brand: "چدن", idCheckBox: "filter-brand-castIron-checkbox" },
    { id: 5, brand: "کنوود", idCheckBox: "filter-brand-kenwood-checkbox" },
  ];
  return (
    <div className="pt-6 flex flex-col gap-y-2">
      {checkBoxBrand.map((item) => (
        <div key={item.id} className="flex justify-end gap-x-2 ">
          <p className="text-sm text-gray-700">{item.brand}</p>
          <Checkbox id={item.idCheckBox} name="finder-pref-9k2-external-disks-1yg-checkbox" />
        </div>
      ))}
    </div>
  );
}

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
