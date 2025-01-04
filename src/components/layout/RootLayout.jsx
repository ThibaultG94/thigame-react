import { Gamepad } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { routesConfig } from "../../routes/config";

const RootLayout = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <div>
          {/* Logo and title */}
          <div>
            <Link to="/">
              <Gamepad />
              <span>ThiGame</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div>
            {Object.values(routesConfig).map(({ path, meta }) => {
              const Icon = meta.icon;
              return (
                <Link key={path} to={path}>
                  {Icon && <Icon />}
                  <span>{meta.title}</span>
                </Link>
              );
            })}
          </div>

          <div></div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
