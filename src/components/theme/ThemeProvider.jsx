import { createContext, useContext, useEffect } from "react";
import { useThemeStore } from "../../store/themeStore";

// Context creation with a typed default value
const ThemeContext = createContext({
  theme: "light",
  strategy: "manual",
  setTheme: (theme) => {},
  setStrategy: (strategy) => {},
  toggleTheme: () => {},
});

// Custom Hook to use the theme
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const { theme, strategy, setTheme, setStrategy, toggleTheme } =
    useThemeStore();

  // Effect to manage DOM changes
  useEffect(() => {
    // Immediate application of the theme
    document.documentElement.classList.toggle("dark", theme === "dark");

    // If we use the system strategy, we listen for changes
    if (strategy === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => setTheme(e.matches ? "dark" : "light");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, strategy, setTheme]);

  const value = { theme, setTheme, strategy, setStrategy, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
