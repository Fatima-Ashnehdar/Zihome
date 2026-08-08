import { create } from "zustand";

type CartPage = "shopping-cart" | "order-delivery-address" | "payment-result";

interface CartStore {
  page: CartPage;
  setPage: (page: CartPage) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  page: "shopping-cart",
  setPage: (page) => set({ page }),
}));
