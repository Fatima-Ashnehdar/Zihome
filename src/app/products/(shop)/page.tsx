/** @format */

import { ProductCategory } from "./components/category";

import { CategoriesAPI } from "./api/data-products";

export default async function ProductsPage() {
  const categoriesData = await CategoriesAPI();

  return (
    <div dir="rtl" className="py-8 mt-[13%] flex flex-col gap-y-12 bg-nutal-50">
      <ProductCategory category={categoriesData} />
    </div>
  );
}
