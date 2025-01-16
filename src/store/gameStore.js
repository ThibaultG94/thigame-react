import { create } from "zustand";

export const useGamesStore = create((set) => ({
  games: [],
  filters: {
    category: "",
    difficulty: "",
    playerMode: "",
  },
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),
}));
