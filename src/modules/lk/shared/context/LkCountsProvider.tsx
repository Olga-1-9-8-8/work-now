import React from "react";
import { TotalAppliesProvider } from "./LkTotalAppliesCountContextProvider";
import { TotalFavoritesProvider } from "./LkTotalFavoritesCountContextProvider";
import { TotalProfileResumesProvider } from "./LkTotalProfileResumesCountContextProvider";
import { TotalProfileVacanciesProvider } from "./LkTotalProfileVacanciesCountContextProvider";

interface LkProviderProps {
  children: React.ReactNode;
}

export const LkCountsProvider = ({ children }: LkProviderProps) => {
  return (
    <TotalProfileResumesProvider>
      <TotalProfileVacanciesProvider>
        <TotalAppliesProvider>
          <TotalFavoritesProvider>{children}</TotalFavoritesProvider>
        </TotalAppliesProvider>
      </TotalProfileVacanciesProvider>
    </TotalProfileResumesProvider>
  );
};
