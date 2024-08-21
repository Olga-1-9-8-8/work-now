import { useQuery } from "@tanstack/react-query";
import { UserEntity } from "../../../types";
import { getUser } from "../api/apiAuth";

export const useUser = () => {
  const {
    isLoading: isUserLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return {
    user,
    isUserLoading,
    error,
    isAuthenticated: user?.role === "authenticated",
    role: user?.user_metadata?.role as UserEntity,
  };
};
