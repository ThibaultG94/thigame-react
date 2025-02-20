import { featuredGames } from "../../data/games/featured";
import FeaturedGames from "./components/FeaturedGames";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  return (
    <div className="container space-y-16 py-8">
      <HeroSection />
      <FeaturedGames games={featuredGames} />
      <Features />
    </div>
  );
};

export default HomePage;
