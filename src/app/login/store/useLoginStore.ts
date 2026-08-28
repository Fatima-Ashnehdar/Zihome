import { create } from "zustand";

type CardPage = "register" | "verification-code" | "loginWith-password" | "change-password";

interface CardStore {
  page: CardPage;
  setPage: (page: CardPage) => void;
}

export const useLoginStore = create<CardStore>((set) => ({
  page: "register",
  setPage: (page) => set({ page }),
}));
