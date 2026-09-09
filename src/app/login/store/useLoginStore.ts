import { create } from "zustand";

type CardPage = "register" | "verification-code" | "loginWith-password" | "change-password";

interface CardStore {
  page: CardPage;
  phone: string;
  setPage: (page: CardPage) => void;
  setPhone: (phone: string) => void;
}

export const useLoginStore = create<CardStore>((set) => ({
  page: "register",
  phone: "",
  setPage: (page) => set({ page }),
  setPhone: (phone) => set({ phone }),
}));
