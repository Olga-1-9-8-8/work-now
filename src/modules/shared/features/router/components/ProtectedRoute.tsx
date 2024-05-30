import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../services/auth";
import { Spinner } from "../../../ui/spinner/Spinner";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { isUserLoading, isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (!isAuthenticated && !isUserLoading) navigate("/login");
  }, [isAuthenticated, isUserLoading, navigate]);

  if (isUserLoading) return <Spinner />;
  return isAuthenticated ? children : null;
};
