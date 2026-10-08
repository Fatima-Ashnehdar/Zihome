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

import { ProductsAPI } from "@/app/products/(shop)/api/data-products";

import { SearchMade } from "./searchMade";

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
    <div className="relative w-[50%]">
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
            placeholder="جستجو"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="h-11 pr-10"
          />

          <Search
            onClick={handleSearch}
            className="absolute right-4 top-3 size-4.5 cursor-pointer text-gray-400"
          />
        </div>

        {search && (
          <ComboboxContent dir="rtl">
            <ComboboxEmpty>محصولی پیدا نشد</ComboboxEmpty>

            <ComboboxList className="flex flex-col gap-y-3 py-4">
              {(product) => (
                <ComboboxItem key={product.id} value={product.name} className="flex gap-x-2">
                  <Search className="size-4 text-gray-400" />
                  <p className="text-gray-800">{product.name}</p>
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
