import { ReactNode, useMemo } from "react";
import { createContext } from "../../../shared/context";
import { useTotalCounts } from "../hooks/useTotalCounts";
import { LkTotalProfileResumesCountContextType } from "../types/LkTotalProfileResumesCountContextType";

const {
  ContextProvider: LkTotalProfileResumesCountContextProvider,
  useContext: useLkTotalProfileResumesContext,
} = createContext<LkTotalProfileResumesCountContextType>(
  {} as LkTotalProfileResumesCountContextType,
);

export const useLkTotalProfileResumesCountContext = () => {
  const { totalCount } = useLkTotalProfileResumesContext();
  return { totalCount };
};

export const TotalProfileResumesProvider = ({ children }: { children: ReactNode }) => {
  const { resumesCount: totalCount } = useTotalCounts();

  const value = useMemo<LkTotalProfileResumesCountContextType>(
    () => ({
      totalCount,
    }),
    [totalCount],
  );

  return (
    <LkTotalProfileResumesCountContextProvider value={value}>
      {children}
    </LkTotalProfileResumesCountContextProvider>
  );
};
