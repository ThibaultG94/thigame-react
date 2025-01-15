import { Search } from "lucide-react";
import { Section } from "../../../components/layout/Section";

const GamesHero = () => {
  return (
    <Section centered className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Découvrez Nos Jeux</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Une sélection de jeux classiques réinventés pour stimuler votre esprit
          et tester vos compétences.
        </p>
      </div>

      {/* Global search bar */}
      <div className="max-w-xl mx-auto w-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Rechercher un jeu..."
            className="w-full pl-10 pr-4 py-2 rounded-lg borderr bg-background"
          />
        </div>
      </div>
    </Section>
  );
};

export default GamesHero;
