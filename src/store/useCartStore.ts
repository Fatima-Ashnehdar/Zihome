import { create } from "zustand";

export interface CartItem {
  id: number;
  picture: string;
  name: string;
  color: string;
  counter: number;
}

export interface Cart {
  items: CartItem[];
  addItem: (id: CartItem) => void;
  plusCount: (id: number) => void;
  minusCount: (id: number) => void;
  counter: (id: number) => number;
}

export const useCartStore = create<Cart>((set, get) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const exists = state.items.some((item) => item.id === product.id);

      return {
        items: exists
          ? state.items.map((item) =>
              item.id === product.id ? { ...item, counter: item.counter + 1 } : item,
            )
          : [...state.items, { ...product, counter: 1 }],
      };
    }),

  plusCount: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, counter: item.counter + 1 } : item,
      ),
    })),

  minusCount: (id) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.id === id ? { ...item, counter: item.counter - 1 } : item))
        .filter((item) => item.counter > 0),
    })),

  counter: (id) => get().items.find((item) => item.id === id)?.counter ?? 0,
}));
