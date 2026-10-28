/** @format */

import { CategoriesCardProps } from "../types/index";

import { CategoryCard } from "./card";

export interface CategoryListProps {
  category: CategoriesCardProps[];
}
export function CategoryList({ category }: CategoryListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {category.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
}
