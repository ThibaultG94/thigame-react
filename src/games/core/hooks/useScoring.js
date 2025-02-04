export const useScoring = (config) => {
  const [score, setScore] = useState(0);
  const [streakCount, setStreakCount] = useState(0);
  const [lastActionTime, setLastActionTime] = useState(null);

  const calculateScore = useCallback(
    (action, time = Date.now()) => {
      let points = config.basePoints;

      // Streak bonus if activated
      if (config.streakBonus && lastActionTime) {
        const timeDiff = time - lastActionTime;
        if (timeDiff < 3000) {
          // 3 seconds for the streak
          points *= 1 + streakCount * 0.1; // +10% per streak
          setStreakCount((prev) => prev + 1);
        } else {
          setStreakCount(0);
        }
      }

      // Time bonus if activated
      if (config.timeBonus) {
        // Time bonus logic to be implemented
      }

      setLastActionTime(time);
      setScore((prev) => prev + Math.round(points));

      return Math.round(points);
    },
    [config, lastActionTime, streakCount]
  );

  return {
    score,
    calculateScore,
    streakCount,
  };
};
