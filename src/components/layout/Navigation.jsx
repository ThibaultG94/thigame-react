import { Link, useLocation } from "react-router-dom";
import { routesConfig } from "../../routes/config";

const Navigation = ({ className, onClick }) => {
  const location = useLocation();

  return (
    <nav className={className}>
      {Object.values(routesConfig).map(({ path, meta }) => {
        const Icon = meta.icon;
        const isActive = location.pathname === `/${path}`;

        return (
          <Link
            key={path}
            to={`/${path}`}
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "text-primary font-medium bg-accent/50"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
            }`}
          >
            <Icon className="h5 w-5" />
            <span>{meta.title}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
