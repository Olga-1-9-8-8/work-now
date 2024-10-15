import { ReactNode, useMemo } from "react";
import { createContext } from "../../../shared/context";
import { useTotalCounts } from "../hooks/useTotalCounts";
import { LkTotalAppliesCountContextType } from "../types/LkTotalAppliesCountContextType";

const {
  ContextProvider: LkTotalAppliesCountContextProvider,
  useContext: useLkTotalAppliesContext,
} = createContext<LkTotalAppliesCountContextType>({} as LkTotalAppliesCountContextType);

export const useLkTotalAppliesCountContext = () => {
  const { totalCount } = useLkTotalAppliesContext();
  return { totalCount };
};

export const TotalAppliesProvider = ({ children }: { children: ReactNode }) => {
  const { appliesCount: totalCount } = useTotalCounts();

  const value = useMemo<LkTotalAppliesCountContextType>(
    () => ({
      totalCount,
    }),
    [totalCount],
  );

  return (
    <LkTotalAppliesCountContextProvider value={value}>
      {children}
    </LkTotalAppliesCountContextProvider>
  );
};
