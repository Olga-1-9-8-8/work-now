import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../api/apiLkFavorites";

export const useFavorites = (userId: number) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["favorites", userId],
    queryFn: () => getFavorites(userId),
    select: (favorites) => ({
      favorites: favorites?.data,
      totalCount: favorites?.totalCount,
    }),
  });

  return { isLoading, ...data, error };
};
