import { Gamepad, Menu, X } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { routesConfig } from "../../routes/config";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme/ThemeToggle";

const RootLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-full flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-2">
            {/* Menu button on mobile only */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <X /> : <Menu />}
            </Button>

            <Link to="/" className="flex items-center gap-2">
              <Gamepad className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">ThiGame</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {Object.values(routesConfig).map(({ path, meta }) => {
              const Icon = meta.icon;
              return (
                <Link
                  key={path}
                  to={`/${path}`}
                  className={`flex items-center gap-2 text-base ${
                    location.pathname === `/${path}`
                      ? "text-primary - font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{meta.title}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-16">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
