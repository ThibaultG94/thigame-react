import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "./ThemeProvider";

const ThemeControl = () => {
  const { theme, strategy, setTheme, setStrategy } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Manual theme control */}
      <div className="flex items-center border rounded-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setStrategy("manual");
            setTheme("light");
          }}
          className={`rounded-l-md ${
            strategy === "manual" && theme === "light" ? "bg-accent" : ""
          }`}
          aria-label="Light mode"
        >
          <Sun className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setStrategy("manual");
            setTheme("dark");
          }}
          className={`rounded-r-md ${
            strategy === "manual" && theme === "dark" ? "bg-accent" : ""
          }`}
          aria-label="Dark mode"
        >
          <Moon className="h-4 w-4" />
        </Button>
      </div>

      {/* Switch to system theme */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setStrategy("system")}
        className={`rounded-md ${strategy === "system" ? "bg-accent" : ""}`}
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ThemeControl;
