/** @format */

import { CategoryDescription } from "./components/description";
import { CategorySidebar } from "./components/sidebar";
import { CategoryTab } from "./components/tabs";

import { mockCategories } from "./data/mock-categories";

import { CategoriesCardProps } from "./types/index";

export interface ProductPageProps {
  category: CategoriesCardProps[];
}
export default function CategoryPage() {
  return (
    <div dir="rtl" className="px-30 py-8 flex flex-col gap-y-12 bg-gray10">
      <div>
        <div className="flex gap-x-2">
          <p className="text-base text-gray3">زی هوم / لوازک آشپزخانه /</p>
          <p className="text-base text-gray1">لوازم برقی آشپزخانه</p>
        </div>
        <p className="text-base text-gray1 pt-4">یخچال فریزر</p>
      </div>
      <div className="flex justify-between gap-x-7">
        <div>
          <CategorySidebar />
        </div>
        <div className="w-full">
          <CategoryTab category={mockCategories} />
        </div>
      </div>
      <CategoryDescription />
    </div>
  );
}
