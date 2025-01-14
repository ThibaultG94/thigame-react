import { Gamepad2, Home, Trophy, User } from "lucide-react";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/Home"));
const GamesPage = lazy(() => import("../pages/Games"));
const LeaderboardPage = lazy(() => import("../pages/Leaderboard"));
const AboutPage = lazy(() => import("../pages/About"));

export const routesConfig = {
  home: {
    path: "",
    component: HomePage,
    meta: {
      title: "Accueil",
      icon: Home,
    },
  },
  games: {
    path: "games",
    component: GamesPage,
    meta: {
      title: "Jeux",
      icon: Gamepad2,
    },
  },
  leaderboard: {
    path: "leaderboard",
    component: LeaderboardPage,
    meta: {
      title: "Classement",
      icon: Trophy,
    },
  },
  about: {
    path: "about",
    component: AboutPage,
    meta: {
      title: "À propos",
      icon: User,
    },
  },
};
