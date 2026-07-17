/** @format */
import { CategoryCardProps } from "../types";
import { CategoryCard } from "./categoryCard";

export interface CategoryProps {
  category: CategoryCardProps[];
}

export function ProductCategory({ category }: CategoryProps) {
  return (
    <div>
      <div className="flex gap-x-2">
        <p className="text-base text-gray-500">زی هوم /</p>
        <p className="text-base text-gray-900">لوازم آشپزخانه</p>
      </div>
      <p className="text-base text-gray-900 py-4">لوازم آشپزخانه</p>
      <div className="flex justify-between gap-x-7">
        {category.map((card) => (
          <CategoryCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
