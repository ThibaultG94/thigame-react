import { Section } from "../../components/layout/Section";
import GamesFilters from "./components/GamesFilters";
import GamesGrid from "./components/GamesGrid";
import GamesHero from "./components/GamesHero";

const GamesPage = () => {
  return (
    <div>
      <GamesHero />
      <Section>
        <GamesFilters />
      </Section>
      <Section>
        <GamesGrid />
      </Section>
    </div>
  );
};

export default GamesPage;
