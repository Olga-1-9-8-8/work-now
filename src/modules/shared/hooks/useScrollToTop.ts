import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUrl } from "./useUrl";

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const { getParam } = useUrl();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, getParam("offset")]);
};
