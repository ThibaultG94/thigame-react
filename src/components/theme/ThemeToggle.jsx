import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-md"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-all" />
      ) : (
        <Sun className="w-4 h-4 transition-all" />
      )}
    </Button>
  );
};

export default ThemeToggle;
