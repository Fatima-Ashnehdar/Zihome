import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { items } from "../../data/mock-orders";

export function HistorySelect() {
  return (
    <div className="flex flex-col gap-y-1.5">
      <p className="text-base text-gray-800">وضعیت</p>
      <Select items={items}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue className="text-sm" />
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
    </div>
  );
}
