import * as React from "react";
import { createContext } from "../../context";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ResponsiveContextType } from "../types/ResponsiveContextType";

export interface ResponsiveProviderProps {
  children?: React.ReactNode;
}

const { ContextProvider: ResponsiveContextProvider, useContext } =
  createContext<ResponsiveContextType>({} as ResponsiveContextType);

export const useResponsiveContext = () => {
  const { isMobile } = useContext();
  return isMobile;
};

export const ResponsiveProvider = ({ children }: ResponsiveProviderProps) => {
  const isMobile = useMediaQuery("(hover: none) and (pointer: coarse)");

  const value = React.useMemo<ResponsiveContextType>(() => ({ isMobile }), [isMobile]);

  return <ResponsiveContextProvider value={value}>{children}</ResponsiveContextProvider>;
};
