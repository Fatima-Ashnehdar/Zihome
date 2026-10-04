/**@format */

import { mockCategory } from "../../data/mock-home";

import { CategoryCard } from "./card";

export function CategoryList() {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="text-3xl text-gray-900 text-center">{mockCategory.title}</p>
      <div className="flex gap-x-6">
        {mockCategory.category.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
