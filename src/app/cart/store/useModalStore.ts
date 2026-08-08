import { create } from "zustand";

type CartPage = "disabled" | "show" | "payment";

interface CartStore {
  page: CartPage;
  setPage: (page: CartPage) => void;
}

export const useModalStore = create<CartStore>((set) => ({
  page: "disabled",
  setPage: (page) => set({ page }),
}));
