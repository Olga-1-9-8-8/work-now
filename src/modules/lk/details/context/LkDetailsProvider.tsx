import * as React from "react";
import { createContext } from "../../../shared/context";
import { useUpdateUser } from "../../../shared/services/auth";
import { LkDetailsContextType } from "./types/LkDetailsContextType";

export interface ResponsiveProviderProps {
  children?: React.ReactNode;
}

const { ContextProvider: LkDetailsContextProvider, useContext } =
  createContext<LkDetailsContextType>({} as LkDetailsContextType);

export const useLkDetailsContext = () => {
  const { updateUser, isUpdatingUser } = useContext();
  return { updateUser, isUpdatingUser };
};

export const LkDetailsProvider = ({ children }: ResponsiveProviderProps) => {
  const { updateUser, isUpdatingUser } = useUpdateUser();

  const value = React.useMemo<LkDetailsContextType>(
    () => ({ updateUser, isUpdatingUser }),
    [updateUser, isUpdatingUser],
  );

  return <LkDetailsContextProvider value={value}>{children}</LkDetailsContextProvider>;
};
