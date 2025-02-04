import { useState } from "react";

export const useGameState = (initialState) => {
  const [gameState, setGameState] = useState({
    status: "idle", // idle, running, paused, completed
    currentLevel: 0,
    score: 0,
    ...initialState,
  });

  const actions = {
    startGame: () => setGameState({ ...prev, status: "running" }),
    pauseGame: () => setGameState({ ...prev, status: "paused" }),
    // other actions
  };

  return [gameState, actions];
};
