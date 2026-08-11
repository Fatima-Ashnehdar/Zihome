/**@format */

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const province = [
  { label: "همه موارد", value: null },
  { label: "تهران", value: "tehran" },
  { label: "اردبیل", value: "ardebil" },
  { label: "شیراز", value: "shiraz" },
  { label: "قم", value: "qom" },
  { label: "مشهد", value: "mashhad" },
  { label: "البرز", value: "alborz" },
];

const city = [
  { label: "همه موارد", value: null },
  { label: "شهر تهران", value: "tehran-city" },
  { label: "دماوند", value: "damavand" },
];

export function SelectBox() {
  return (
    <div className="flex gap-x-5">
      <div className="flex flex-col gap-y-2 w-full">
        <p className="text-base text-gray-800">استان</p>
        <Select items={province}>
          <SelectTrigger className="w-full py-4.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {province.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <p className="text-base text-gray-800">شهر</p>
        <Select items={city}>
          <SelectTrigger className="w-full py-4.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {city.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
