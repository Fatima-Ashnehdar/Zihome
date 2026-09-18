import axios from "axios";

export async function CategoriesAPI() {
  const { data } = await axios.get("http://localhost:3000/api/v1/categories");
  return data.data;
}

export async function ProductsAPI(params?: {
  sort?: string;
  categoryId?: string;
  brandId?: string;
  search?: string;
  page?: number;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  hasDiscount?: boolean;
}) {
  const { data } = await axios.get("http://localhost:3000/api/v1/products", {
    params,
  });

  return data.data;
}
