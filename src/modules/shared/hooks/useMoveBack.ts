import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useMoveBack = (path?: string) => {
  const navigate = useNavigate();

  const location = useLocation();

  const moveBack = useCallback(() => {
    if (path) {
      navigate(path);
    } else if (location.key === "default") {
      navigate("/");
    } else {
      const prevPagePath = location.pathname.split("/").slice(0, -1).join("/");
      navigate(prevPagePath || "/");
    }
  }, [location, navigate, path]);

  return moveBack;
};
