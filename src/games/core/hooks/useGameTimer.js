import { useState, useEffect, useCallback } from "react";

/**
 * Reusable hook for timer management in games
 * @param {Object} options Timer configuration
 * @param {number} options.initialTime Initial time in seconds
 * @param {boolean} options.countDown True for a countdown timer, false for a stopwatch
 * @param {function} options.onTimeUp Callback called when time runs out (countdown)
 * @param {boolean} options.autoStart Automatic timer start
 * @returns {Object} Timer status and controls
 */
export const useGameTimer = ({
  initialTime = 60,
  countDown = false,
  onTimeUp = () => {},
  autoStart = false,
} = {}) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isPaused, setIsPaused] = useState(false);

  // Time formatting in mm:ss
  const formattedTime = useCallback(() => {
    const minutes = Math.floor(Math.abs(time) / 60);
    const seconds = Math.abs(time) % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, [time]);

  // Start timer
  const start = useCallback(() => {
    setIsRunning(true);
    setIsPaused(false);
  }, []);

  // Set to pause
  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  // Resume
  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Reset
  const reset = useCallback(() => {
    setTime(initialTime);
    setIsRunning(false);
    setIsPaused(false);
  }, [initialTime]);

  // Main timer logic
  useEffect(() => {
    let interval = null;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        setTime((currentTime) => {
          const newTime = countDown ? currentTime - 1 : currentTime + 1;

          // End of countdown management
          if (countDown && newTime <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            onTimeUp();
            return 0;
          }

          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, isPaused, countDown, onTimeUp]);

  // Returns timer status and controls
  return {
    time,
    formattedTime: formattedTime(),
    isRunning,
    isPaused,
    start,
    pause,
    resume,
    reset,
  };
};
