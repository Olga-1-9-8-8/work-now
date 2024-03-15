import * as React from "react";
import { useContextResponsive } from "../hooks/useContextResponsive";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ResponsiveContextType } from "../types/ResponsiveContextType";

export interface ResponsiveProviderProps {
  children?: React.ReactNode;
}

export const ResponsiveProvider = ({ children }: ResponsiveProviderProps) => {
  const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");

  const { ResponsiveContext } = useContextResponsive();

  const value = React.useMemo<ResponsiveContextType>(() => ({ isMobile }), [isMobile]);

  return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
};
