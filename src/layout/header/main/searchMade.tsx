/**@format */

import { mockSearchMade } from "@/app/home/data/mock-home";

export function SearchMade() {
  return (
    <div className="flex flex-col gap-y-10 px-9 pb-6 pt-5">
      {mockSearchMade.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-5">
          <p className="text-base text-gray-900 font-medium">{item.title}</p>
          <div className="flex gap-x-4 gap-y-4 flex-wrap">
            {item.search.map((search) => (
              <div key={search.id} className="bg-gray-50 px-4 py-2 rounded-md cursor-pointer">
                <p className="text-sm text-gray-900">{search.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
