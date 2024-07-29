import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useUrl } from "../../../shared/hooks";
import { getProfileVacancies } from "../api/apiProfile";
import { mapProfileVacancies } from "../utils/mapProfileVacancies";

export const useProfileVacancies = () => {
  const queryClient = useQueryClient();

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: profileVacancies,
    error,
  } = useQuery({
    queryKey: ["profileVacancies", page],
    queryFn: () => getProfileVacancies({ page }),
  });

  if (
    profileVacancies?.totalCount &&
    page < Math.ceil(profileVacancies.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["profileVacancies", page + 1],
      queryFn: () => getProfileVacancies({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["profileVacancies", page - 1],
      queryFn: () => getProfileVacancies({ page: page - 1 }),
    });
  }

  return {
    isProfileVacanciesLoading: isLoading,
    profileVacanciesError: error,
    profileVacancies: profileVacancies ? mapProfileVacancies(profileVacancies.data) : undefined,
    totalProfileVacanciesCount: profileVacancies?.totalCount ?? undefined,
  };
};
