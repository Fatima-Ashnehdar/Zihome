/**@format */

import { mockKitchenAppliances } from "@/layout/data/mockLayout";

export function KitchenAppliances() {
  return (
    <div className="flex flex-col gap-y-6 w-[70%] pt-5">
      <div className="flex items-center gap-x-2">
        <p className="text-base text-primary">{mockKitchenAppliances.title}</p>
        {mockKitchenAppliances.icon}
      </div>
      <div className="grid grid-cols-3 gap-y-4">
        {mockKitchenAppliances.category.map((category) => (
          <div key={category.id} className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <span className="inline-block w-1 h-6 bg-red-600 rounded-tr-4xl rounded-br-4xl" />
              <p className="text-base text-gray-900">{category.title}</p>
              {category.icon}
            </div>
            <div className="flex flex-col gap-y-2">
              {category.links.map((link) => (
                <div key={link.id}>
                  <p className="text-base text-gray-600 cursor-pointer">{link.link}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
