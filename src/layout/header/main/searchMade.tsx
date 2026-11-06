/**@format */

import { mockSearchMade } from "@/app/(web)/home/data/mock-home";

export function SearchMade() {
  return (
    <div className="flex flex-col gap-y-5 md:gap-y-6 px-5 sm:px-9 pb-5 md:pb-6 pt-4 md:pt-5">
      {mockSearchMade.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-3 sm:gap-y-3">
          <p className="text-[11px] xs:text-xs md:text-sm text-gray-900 font-medium">
            {item.title}
          </p>
          <div className="flex gap-x-2 md:gap-x-3 gap-y-2 md:gap-y-3 flex-wrap">
            {item.search.map((search) => (
              <div
                key={search.id}
                className="bg-gray-50 px-2 md:px-4 py-1 md:py-2 rounded-sm cursor-pointer"
              >
                <p className="text-[10px] md:text-xs text-gray-900">{search.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
