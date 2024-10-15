import { ReactNode, useMemo } from "react";
import { createContext } from "../../../shared/context";
import { useTotalCounts } from "../hooks/useTotalCounts";
import { LkTotalProfileVacanciesCountContextType } from "../types/LkTotalProfileVacanciesCountContextType";

const {
  ContextProvider: LkTotalProfileVacanciesCountContextProvider,
  useContext: useLkTotalProfileVacanciesContext,
} = createContext<LkTotalProfileVacanciesCountContextType>(
  {} as LkTotalProfileVacanciesCountContextType,
);

export const useLkTotalProfileVacanciesCountContext = () => {
  const { totalCount } = useLkTotalProfileVacanciesContext();
  return { totalCount };
};

export const TotalProfileVacanciesProvider = ({ children }: { children: ReactNode }) => {
  const { vacanciesCount: totalCount } = useTotalCounts();

  const value = useMemo<LkTotalProfileVacanciesCountContextType>(
    () => ({
      totalCount,
    }),
    [totalCount],
  );

  return (
    <LkTotalProfileVacanciesCountContextProvider value={value}>
      {children}
    </LkTotalProfileVacanciesCountContextProvider>
  );
};
