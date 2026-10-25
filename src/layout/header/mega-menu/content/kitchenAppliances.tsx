/**@format */

import { mockKitchenAppliances } from "@/layout/data/mockLayout";

import Link from "next/link";

export function KitchenAppliances() {
  return (
    <div className="flex flex-col gap-y-6 w-[70%] pt-5">
      <Link href={mockKitchenAppliances.link}>
        <div className="flex items-center gap-x-2">
          <p className="text-base text-primary cursor-pointer">{mockKitchenAppliances.title}</p>
          {mockKitchenAppliances.icon}
        </div>
      </Link>
      <div className="grid grid-cols-3 gap-y-4">
        {mockKitchenAppliances.category.map((category) => (
          <div key={category.id} className="flex flex-col gap-y-4">
            <Link href={category.link} className="flex items-center gap-x-2">
              <span className="inline-block w-1 h-6 bg-red-600 rounded-tr-4xl rounded-br-4xl" />
              <p className="text-base text-gray-900 cursor-pointer">{category.title}</p>
              {category.icon}
            </Link>
            <div className="flex flex-col gap-y-2">
              {category.texts.map((item) => (
                <Link href={`products/${item.link}`} key={item.id}>
                  <p className="text-base text-gray-600 cursor-pointer">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
