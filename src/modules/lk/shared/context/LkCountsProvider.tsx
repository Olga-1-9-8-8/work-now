import React from "react";
import { createContext } from "../../../shared/context";
import { useApplies } from "../../../shared/features/applies/hooks/useApplies";
import { useFavorites } from "../../../shared/features/favorites/hooks/useFavorites";
import { useProfileResumes } from "../hooks/useProfileResumes";
import { useProfileVacancies } from "../hooks/useProfileVacancies";
import { LkCountsContextType } from "../types/LkCountsContextType";

interface LkProviderProps {
  children: React.ReactNode;
}

const { ContextProvider: LkCountsContextProvider, useContext } = createContext<LkCountsContextType>(
  {} as LkCountsContextType,
);

export const useLkCountsContext = () => {
  const {
    totalProfileResumesCount,
    totalAppliesCount,
    totalFavoritesCount,
    totalProfileVacanciesCount,
  } = useContext();
  return {
    totalProfileResumesCount,
    totalAppliesCount,
    totalFavoritesCount,
    totalProfileVacanciesCount,
  };
};

export const LkCountsProvider = ({ children }: LkProviderProps) => {
  const { totalProfileResumesCount } = useProfileResumes();
  const { totalProfileVacanciesCount } = useProfileVacancies();
  const { totalAppliesCount } = useApplies();
  const { totalFavoritesCount } = useFavorites();

  const value = React.useMemo<LkCountsContextType>(
    () => ({
      totalProfileResumesCount,
      totalAppliesCount,
      totalFavoritesCount,
      totalProfileVacanciesCount,
    }),
    [totalAppliesCount, totalFavoritesCount, totalProfileResumesCount, totalProfileVacanciesCount],
  );

  return <LkCountsContextProvider value={value}>{children}</LkCountsContextProvider>;
};
