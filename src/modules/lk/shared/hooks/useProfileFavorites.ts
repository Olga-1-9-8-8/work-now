import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useUrl } from "../../../shared/hooks";
import { getProfileFavorites } from "../api/apiProfile";
import { mapProfileFavorites } from "../utils/mapProfileFavorites";

export const useProfileFavorites = () => {
  const queryClient = useQueryClient();

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: profileFavorites,
    error,
  } = useQuery({
    queryKey: ["profileFavorites", page],
    queryFn: () => getProfileFavorites({ page }),
  });

  if (
    profileFavorites?.totalCount &&
    page < Math.ceil(profileFavorites.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["profileFavorites", page + 1],
      queryFn: () => getProfileFavorites({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["profileFavorites", page - 1],
      queryFn: () => getProfileFavorites({ page: page - 1 }),
    });
  }

  return {
    isProfileFavoritesLoading: isLoading,
    profileFavoritesError: error,
    profileFavorites: profileFavorites ? mapProfileFavorites(profileFavorites.data) : undefined,
    totalProfileFavoritesCount: profileFavorites?.totalCount ?? undefined,
  };
};
