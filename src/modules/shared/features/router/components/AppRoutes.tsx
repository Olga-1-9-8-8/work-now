import { useRoutes } from "react-router-dom";
import { routes } from "../config/routes";

export const AppRoutes = () => {
  const Routes = useRoutes(routes);

  return Routes;
};
