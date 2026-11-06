/**@format */

import { mockCategory } from "../../data/mock-home";

import { CategoryCard } from "./card";

export function CategoryList() {
  return (
    <div className="flex flex-col gap-y-2 xs:gap-y-3 lg:gap-y-4 2xl:gap-y-6">
      <p className="text-base sm:text-lg lg:text-2xl 2xl:text-3xl text-gray-900 text-center">
        {mockCategory.title}
      </p>
      <div
        className="flex gap-x-3 xl:gap-x-6 overflow-x-auto snap-x snap-mandatory pb-2 sm:pb-0
        scrollbar [&::-webkit-scrollbar]:hidden sm:overflow-visible"
      >
        {mockCategory.category.map((item) => (
          <div key={item.id} className="snap-start shrink-0 w-[40%] xs:w-[30%] sm:contents">
            <CategoryCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
