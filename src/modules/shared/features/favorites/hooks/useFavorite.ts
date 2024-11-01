import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { getFavorite } from "../api/apiFavorite";

export const useFavorite = (id: number) => {
  const { t } = useLanguageSwitcher("shared");

  const {
    isLoading: isInFavoritesLoading,
    data: isInFavorites,
    error,
  } = useQuery({
    queryKey: ["favorites", id],
    queryFn: () => getFavorite(id, t),
    select: (data) => !!data,
  });

  return useMemo(
    () => ({
      isInFavoritesLoading,
      isInFavoritesError: error,
      isInFavorites,
    }),
    [error, isInFavorites, isInFavoritesLoading],
  );
};
