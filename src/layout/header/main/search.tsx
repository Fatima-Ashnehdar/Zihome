"use client";

/**@format */

import { Separator } from "@/components/ui/separator";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { Search } from "lucide-react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { SearchMade } from "./searchMade";

import { ProductsAPI } from "@/app/(web)/products/(shop)/api/data-products";

export function HeaderSearch() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (!search.trim()) {
      setProducts([]);
      return;
    }

    ProductsAPI({
      search,
      limit: 5,
    }).then(setProducts);
  }, [search]);

  const handleSearch = () => {
    if (!search.trim()) return;

    router.push(`/products?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="relative w-full lg:w-[50%]">
      <Combobox
        items={products}
        onValueChange={(value: any) => {
          if (!value) return;

          setSearch(value);
          router.push(`/products?search=${encodeURIComponent(value)}`);
        }}
      >
        <div className="relative">
          <ComboboxInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="h-9 text-gray-500 font-normal xs:h-10 sm:h-11 pr-9 md:pr-10 w-full lg:w-82 xl:w-110 2xl:w-149 rounded-full"
          />

          <Search
            onClick={handleSearch}
            className="absolute right-4 top-2.5 sm:top-3 size-4 xs:size-4.5 cursor-pointer text-gray-400"
          />
        </div>

        {search && (
          <ComboboxContent dir="rtl" className="overflow-y-auto">
            <ComboboxEmpty>محصولی پیدا نشد</ComboboxEmpty>

            <ComboboxList className="flex flex-col gap-y-1 xl:gap-y-2 py-4">
              {(product) => (
                <ComboboxItem
                  key={product.id}
                  value={product.name}
                  className="flex gap-x-1 md:gap-x-2"
                >
                  <Search className="size-3 md:size-4 text-gray-400" />
                  <p className="text-xs md:text-sm text-gray-800">{product.name}</p>
                </ComboboxItem>
              )}
            </ComboboxList>
            <Separator />
            <SearchMade />
          </ComboboxContent>
        )}
      </Combobox>
    </div>
  );
}
