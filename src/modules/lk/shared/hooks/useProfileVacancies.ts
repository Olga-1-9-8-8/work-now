import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useUrl } from "../../../shared/hooks";
import { mapUniversalItem } from "../../../shared/utils";
import { getProfileVacancies } from "../api/apiProfile";

export const useProfileVacancies = () => {
  const queryClient = useQueryClient();

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: profileVacancies,
    error,
  } = useQuery({
    queryKey: ["vacancies", page],
    queryFn: async () => {
      const vacanciesData = await getProfileVacancies(page);

      if (vacanciesData) {
        vacanciesData.data.forEach((vacancyData) => {
          const { id } = vacancyData;
          queryClient.setQueryData(["vacancies", id], vacancyData);
        });
      }
      return vacanciesData;
    },
  });

  if (
    profileVacancies?.totalCount &&
    page < Math.ceil(profileVacancies.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["vacancies", page + 1],
      queryFn: () => getProfileVacancies(page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["vacancies", page - 1],
      queryFn: () => getProfileVacancies(page - 1),
    });
  }

  return {
    isProfileVacanciesLoading: isLoading,
    profileVacanciesError: error,
    profileVacancies: profileVacancies?.data.map((vacancy) => mapUniversalItem(vacancy)),
    totalProfileVacanciesCount: profileVacancies?.totalCount ?? undefined,
  };
};
