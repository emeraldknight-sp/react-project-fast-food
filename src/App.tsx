import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};
