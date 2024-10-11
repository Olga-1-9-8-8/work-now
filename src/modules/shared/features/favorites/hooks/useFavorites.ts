import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { useUrl } from "../../../hooks";
import { mapResumeVacancyItem } from "../../../utils";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getFavorites } from "../api/apiFavorites";

export const useFavorites = () => {
  const queryClient = useQueryClient();
  const { t } = useLanguageSwitcher("shared");

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: favorites,
    error,
  } = useQuery({
    queryKey: ["favorites", page],
    queryFn: async () => {
      const favoritesData = await getFavorites(page, t);
      if (favoritesData?.data?.resumes) {
        favoritesData.data.resumes.forEach((resume) => {
          queryClient.setQueryData(["resume", resume.id], resume);
        });
      }

      if (favoritesData?.data.vacancies) {
        favoritesData.data.vacancies.forEach((vacancy) => {
          queryClient.setQueryData(["vacancy", vacancy.id], vacancy);
        });
      }

      return favoritesData;
    },
  });

  if (
    favorites?.totalCount &&
    page < Math.ceil(favorites.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["favorites", page + 1],
      queryFn: () => getFavorites(page + 1, t),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["favorites", page - 1],
      queryFn: () => getFavorites(page - 1, t),
    });
  }

  return {
    isFavoritesLoading: isLoading,
    favoritesError: error,
    favorites: favorites ? mapResumeVacancyItem(favorites.data) : undefined,
    totalFavoritesCount: favorites?.totalCount ?? undefined,
  };
};
