// import { create } from "zustand";
// import { ProductId } from "@/app/products/[id]/api/data";
// import { Product } from "@/app/products/[id]/types";

// export interface ProductStore {
//   product: Product | null;
//   loading: boolean;
//   error: string | null;
//   fetchProduct: (id: string) => Promise<void>;
// }

// export const useProductIdStore = create<ProductStore>((set) => ({
//   product: null,
//   loading: false,
//   error: null,

//   fetchProduct: async (id) => {
//     set({ loading: true, error: null });

//     try {
//       const product = await ProductId(id);
//       set({ product });
//     } finally {
//       set({ loading: false });
//     }
//   },
// }));
import { create } from "zustand";
import { ProductId } from "@/app/products/[id]/api/data";
import { Product } from "@/types";

export interface ProductStore {
  product: Product | null;
  loading: boolean;
  error: string | null;
  fetchProduct: (id: string) => Promise<void>;
}

export const useProductIdStore = create<ProductStore>((set) => ({
  product: null,
  loading: false,
  error: null,

  fetchProduct: async (id) => {
    set({ loading: true, error: null });

    try {
      const product: Product = await ProductId(id);
      set({ product });
    } catch {
      set({ error: "دریافت اطلاعات محصول ناموفق بود." });
    } finally {
      set({ loading: false });
    }
  },
}));
