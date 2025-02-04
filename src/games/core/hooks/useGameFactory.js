export const useGameFactory = (gameType) => {
  const gameConfigs = {
    memory: {
      // useGameLogic: useMemoryGame,
      initialState: {
        cards: [],
        flipped: [],
        matched: [],
        moves: 0,
      },
      layout: {
        type: "grid",
        options: {
          gap: 4,
          padding: 4,
        },
      },
      scoring: {
        basePoints: 100,
        timeBonus: true,
        streakBonus: true,
      },
    },
  };

  const config = gameConfigs[gameType];
  if (!config) throw new error(`Game type ${gameType} not supported`);

  return config;
};
