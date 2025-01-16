import { create } from "zustand";
import { featuredGames } from "../data/games/featured";

export const useGamesStore = create((set) => ({
  games: featuredGames,
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
