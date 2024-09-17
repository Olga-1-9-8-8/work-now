import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useMoveBack = (defaultPath?: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const parentPath = `/${pathParts.slice(0, -1).join("/")}`;

  const moveBack = useCallback(() => {
    const targetPath = location.state?.from || defaultPath || parentPath;
    navigate(targetPath);
  }, [defaultPath, location.state?.from, navigate, parentPath]);

  return { moveBack, titleFromState: location.state?.title };
};
