import { Gamepad, Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import { useResponsiveMenu } from "../../hooks/useResponsiveMenu";
import Navigation from "./Navigation";
import { cn } from "../../utils/cn";

const RootLayout = () => {
  const { isOpen, toggle, close } = useResponsiveMenu();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-full flex items-center justify-between">
          {/* Logo and mobile menu button  */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggle}
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </Button>

            <Link to="/" className="flex items-center gap-2">
              <Gamepad className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">ThiGame</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <Navigation className="hidden md:flex items-center gap-2" />

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 bg-background border-b md:hidden",
          "transform transition-transform duration-300",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <Navigation className="container py-4 flex flex-col" onClick={close} />
      </div>

      {/* Main content */}
      <main className="container pt-16 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
