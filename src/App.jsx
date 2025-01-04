import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import { routesConfig } from "./routes/config";

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
  return <RouterProvider router={router} />;
};

export default App;
