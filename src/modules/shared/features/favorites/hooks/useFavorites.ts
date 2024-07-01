import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { useUrl } from "../../../hooks";
import { getFavorites } from "../api/apiFavorites";
import { mapFavorites } from "../utils/mapFavorites";

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: favorites,
    error,
  } = useQuery({
    queryKey: ["favorites", page],
    queryFn: () => getFavorites(page),
  });

  if (
    favorites?.totalCount &&
    page < Math.ceil(favorites.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["favorites", page + 1],
      queryFn: () => getFavorites(page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["favorites", page - 1],
      queryFn: () => getFavorites(page - 1),
    });
  }

  return {
    isFavoritesLoading: isLoading,
    favoritesError: error,
    favorites: favorites ? mapFavorites(favorites.data, favorites.role) : undefined,
    totalFavoritesCount: favorites?.totalCount ?? undefined,
  };
};
