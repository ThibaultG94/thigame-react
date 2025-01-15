import GamesFilters from "./components/GamesFilters";
import GamesGrid from "./components/GamesGrid";
import GamesHero from "./components/GamesHero";

const GamesPage = () => {
  return (
    <div>
      <GamesHero />
      <GamesFilters />
      <GamesGrid />
    </div>
  );
};

export default GamesPage;
