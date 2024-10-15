import { ReactNode, useMemo } from "react";
import { createContext } from "../../../shared/context";
import { useTotalCounts } from "../hooks/useTotalCounts";
import { LkTotalFavoritesCountContextType } from "../types/LkTotalFavoritesCountContextType";

const {
  ContextProvider: LkTotalFavoritesCountContextProvider,
  useContext: useLkTotalFavoritesContext,
} = createContext<LkTotalFavoritesCountContextType>({} as LkTotalFavoritesCountContextType);

export const useLkTotalFavoritesCountContext = () => {
  const { totalCount } = useLkTotalFavoritesContext();
  return { totalCount };
};

export const TotalFavoritesProvider = ({ children }: { children: ReactNode }) => {
  const { favoritesCount: totalCount } = useTotalCounts();

  const value = useMemo<LkTotalFavoritesCountContextType>(
    () => ({
      totalCount,
    }),
    [totalCount],
  );

  return (
    <LkTotalFavoritesCountContextProvider value={value}>
      {children}
    </LkTotalFavoritesCountContextProvider>
  );
};
