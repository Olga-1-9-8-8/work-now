import React from "react";
import { createContext } from "../../../context";
import { useUser } from "../hooks/useUser";
import { AuthContextType } from "../types/AuthContextType";

interface AuthProviderProps {
  children: React.ReactNode;
}

const { ContextProvider: AuthContextProvider, useContext } = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const useAuthContext = () => {
  const { user, isUserLoading, isAuthenticated, role, error } = useContext();
  return { user, isUserLoading, isAuthenticated, role, error };
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user, isUserLoading, isAuthenticated, role, error } = useUser();

  const value = React.useMemo<AuthContextType>(
    () => ({ user, isUserLoading, isAuthenticated, role, error }),
    [user, isUserLoading, isAuthenticated, role, error],
  );

  return <AuthContextProvider value={value}>{children}</AuthContextProvider>;
};
