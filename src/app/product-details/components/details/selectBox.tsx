/**@format */

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function SelectBox() {
  const items = [
    { label: "انتخاب گارانتی", value: null },
    { label: "۱۲ ماهه", value: "12-month" },
    { label: "۱۸ ماهه", value: "18-month" },
    { label: "۲۴ ماهه", value: "24-month" },
  ];
  return (
    <Select items={items}>
      <SelectTrigger className="w-full max-w-55 py-4.5">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
