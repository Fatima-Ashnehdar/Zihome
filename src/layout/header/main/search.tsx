/**@format */

import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

export function HeaderSearch() {
  return (
    <div className="relative w-[50%]">
      <Input placeholder="جستجو" className="h-11 pr-10" />
      <Search className="size-4.5 absolute top-3 right-4 text-gray-400" />
    </div>
  );
}
