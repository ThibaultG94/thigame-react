import { Brain } from "lucide-react";

export const featuredGames = [
  {
    id: 1,
    title: "Memory Plus",
    description: "Un jeu de mémoire revisité avec des défis modernes",
    icon: Brain,
    players: "1 joueur",
    time: "5-10 min",
    difficulty: "Facile",
    path: "/games/memory",
    category: "Mémoire",
  },
];

export const getFeaturedGameById = (id) =>
  featuredGames.find((game) => game.id === id);

export const getFeaturedGamesByCategory = (category) =>
  featuredGames.filter((game) => game.category === category);
