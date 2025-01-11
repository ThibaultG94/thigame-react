import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";
import { ManualThemeStrategy, SystemThemeStrategy } from "../theme/strategies";

const strategies = {
  manual: new ManualThemeStrategy(),
  system: new SystemThemeStrategy(),
};

export function useTheme() {
  const { theme, strategy, setTheme, setStrategy, toggleTheme } =
    useThemeStore();

  useEffect(() => {
    const currentStrategy = strategies[strategy];
    if (currentStrategy) currentStrategy.apply(theme);
  }, [theme, strategy]);

  return { theme, setTheme, strategy, setStrategy, toggleTheme };
}
