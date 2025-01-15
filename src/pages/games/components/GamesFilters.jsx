import { useState } from "react";
import FilterSection from "../../../components/ui/FilterSection";

const GamesFilters = () => {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [playerMode, setPlayerMode] = useState("");

  return (
    <div className="space-y-4 pt-2">
      <FilterSection
        title="Difficulté"
        options={["Facile", "Moyen", "Difficile"]}
        value={difficulty}
        onChange={setDifficulty}
      />
      <FilterSection
        title="Catégorie"
        options={["Mémoire", "Réflexes", "Logique"]}
        value={category}
        onChange={setCategory}
      />
      <FilterSection
        title="Mode de jeu"
        options={["1 joueur", "1-2 joueurs", "2 joueurs"]}
        value={playerMode}
        onChange={setPlayerMode}
      />
    </div>
  );
};

export default GamesFilters;
