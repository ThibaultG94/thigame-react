export const useGame = (gameType) => {
  const gameConfig = useGameFactory(gameType);

  // Basic hooks
  const [gameState, setGameState] = useState(gameConfig.initialState);
  const timer = useGameTimer();
  const layout = useLayout(gameConfig.layout.type, gameState.cards || []);
  const scoring = useScoring(gameConfig.scoring);

  // Basic actions common to all games
  const actions = {
    startGame: () => {
      timer.start();
      setGameState((prev) => ({ ...prev, status: "running" }));
    },
    pauseGame: () => {
      timer.pause();
      setGameState((prev) => ({ ...prev, status: "paused" }));
    },
    resetGame: () => {
      timer.reset();
      setGameState(gameConfig.initialState);
      // Reset other states if necessary
    },
  };

  return {
    state: gameState,
    actions,
    timer,
    layout,
    scoring,
  };
};
