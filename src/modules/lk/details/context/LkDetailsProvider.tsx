import * as React from "react";
import { createContext } from "../../../shared/context";
import { useUpdateUser } from "../../../shared/services/auth";
import { useProfile } from "../hooks/useProfile";
import { LkDetailsContextType } from "./types/LkDetailsContextType";

export interface ResponsiveProviderProps {
  id?: string;
  children?: React.ReactNode;
}

const { ContextProvider: LkDetailsContextProvider, useContext } =
  createContext<LkDetailsContextType>({} as LkDetailsContextType);

export const useLkDetailsContext = () => {
  const { updateUser, isUpdatingUser, profile, isProfileLoading } = useContext();
  return { updateUser, isUpdatingUser, profile, isProfileLoading };
};

export const LkDetailsProvider = ({ id, children }: ResponsiveProviderProps) => {
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const { profile, isProfileLoading } = useProfile(id);

  const value = React.useMemo<LkDetailsContextType>(
    () => ({ updateUser, isUpdatingUser, profile, isProfileLoading }),
    [updateUser, isUpdatingUser, profile, isProfileLoading],
  );

  return <LkDetailsContextProvider value={value}>{children}</LkDetailsContextProvider>;
};
