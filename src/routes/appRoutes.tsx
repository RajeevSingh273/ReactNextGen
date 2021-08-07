import { useRoutes } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";

export const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/about", element: <About /> },
    { path: "/", element: <Home /> },
  ]);
  return routes;
};
