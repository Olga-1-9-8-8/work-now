import * as React from "react";
import { useResumes } from "../../../../resume/list/hooks/useResumes";
import { createContext } from "../../../../shared/context";
import { LkContextType } from "./types/LkContextType";

export interface ResponsiveProviderProps {
  children?: React.ReactNode;
}

const { ContextProvider: LkContextProvider, useContext } = createContext<LkContextType>(
  {} as LkContextType,
);

export const useLkContext = () => {
  const { resumes } = useContext();
  return { resumes };
};

export const LkProvider = ({ children }: ResponsiveProviderProps) => {
  const { isLoading, resumes, totalCount, error } = useResumes();

  const value = React.useMemo<LkContextType>(
    () => ({ resumes: { isLoading, resumes, totalCount, error } }),
    [error, isLoading, resumes, totalCount],
  );

  return <LkContextProvider value={value}>{children}</LkContextProvider>;
};
