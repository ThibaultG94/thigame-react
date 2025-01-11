import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import { routesConfig } from "./routes/config";
import ThemeProvider from "./components/theme/ThemeProvider";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: Object.values(routesConfig).map(
      ({ path, component: Component, meta }) => ({
        path,
        element: <Component />,
        meta,
      })
    ),
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
