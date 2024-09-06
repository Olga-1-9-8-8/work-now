import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useFiltersParams } from "../../../shared/features/filters/server-side";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { getVacancies } from "../api/apiVacancies";

export const useVacancies = () => {
  const queryClient = useQueryClient();

  const { filters, sortArr, page } = useFiltersParams();

  const {
    isLoading,
    data: vacancies,
    error,
  } = useQuery({
    queryKey: ["vacancies", filters, sortArr, page],

    queryFn: async () => {
      const vacanciesData = await getVacancies({ filters, sortArr, page });

      vacanciesData.data.forEach((vacancyData) => {
        queryClient.setQueryData(["vacancy", vacancyData.id], vacancyData);
      });
      return vacanciesData;
    },
  });

  if (
    vacancies?.totalCount &&
    page < Math.ceil(vacancies.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["vacancy", filters, undefined, page + 1],
      queryFn: () => getVacancies({ filters, sortArr, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["vacancy", filters, undefined, page - 1],
      queryFn: () => getVacancies({ filters, sortArr, page: page - 1 }),
    });
  }

  return {
    isLoading,
    error,
    vacancies: vacancies?.data?.map(mapUniversalItemWithProfile),
    totalCount: vacancies?.totalCount ?? undefined,
  };
};
