import GridContainer from "../../../components/ui/layout/GridContainer";
import { useGamesStore } from "../../../store/gameStore";
import GameCard from "./GameCard";

const GamesGrid = () => {
  // Retrieve the list of games and active filters from the store
  const games = useGamesStore((state) => state.games);
  const filters = useGamesStore((state) => state.filters);

  // Game filter function
  const filteredGames = games.filter((game) => {
    const matchesDifficulty =
      !filters.difficulty || game.difficulty === filters.difficulty;
    const matchesCategory =
      !filters.category || game.category === filters.category;
    const matchesPlayerMode =
      !filters.playerMode || game.playerMode === filters.playerMode;
    return matchesDifficulty && matchesCategory && matchesPlayerMode;
  });

  return (
    <GridContainer columns={{ xs: 1, md: 2, lg: 3 }} gap="lg" contained>
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      {filteredGames.length === 0 && (
        <div className="col-span-full text-center py-12 text-muted-foreground">
          Aucun jeu ne correspond à vos critères de recherche
        </div>
      )}
    </GridContainer>
  );
};

export default GamesGrid;
