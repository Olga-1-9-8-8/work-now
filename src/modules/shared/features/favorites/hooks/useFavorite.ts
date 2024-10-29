import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { getFavorite } from "../api/apiFavorite";

export const useFavorite = (id: number) => {
  const { t } = useLanguageSwitcher("shared");

  const {
    isLoading: isInFavoritesLoading,
    data: favorite,
    error,
  } = useQuery({
    queryKey: ["favorite", id],
    queryFn: () => getFavorite(id, t),
  });

  return useMemo(
    () => ({
      isInFavoritesLoading,
      isInFavoritesError: error,
      isInFavorites: !!favorite,
    }),
    [error, favorite, isInFavoritesLoading],
  );
};
