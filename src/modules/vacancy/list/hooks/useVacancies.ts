import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { LanguageType } from "../../../shared/configs";
import { sortClientData } from "../../../shared/features/filters/client-side";
import { useFiltersParams } from "../../../shared/features/filters/server-side";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { getVacancies } from "../api/apiVacancies";

export const useVacancies = () => {
  const queryClient = useQueryClient();
  const { t, language } = useLanguageSwitcher("vacancy");

  const { filters, sort, page } = useFiltersParams();

  const {
    isLoading,
    data: vacancies,
    error,
  } = useQuery({
    queryKey: ["vacancies", filters, sort, page, language],

    queryFn: async () => {
      const vacanciesData = await getVacancies({ filters, sort, page, t, language });

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
      queryKey: ["vacancy", filters, undefined, page + 1, language],
      queryFn: () => getVacancies({ filters, sort, page: page + 1, t, language }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["vacancy", filters, undefined, page - 1, language],
      queryFn: () => getVacancies({ filters, sort, page: page - 1, t, language }),
    });
  }

  if (sort.column === "salary" && vacancies?.data) {
    sortClientData(sort, vacancies.data);
  }

  return {
    isLoading,
    error,
    vacancies: vacancies?.data?.map((item) =>
      mapUniversalItemWithProfile(item, language as LanguageType),
    ),
    totalCount: vacancies?.totalCount ?? undefined,
  };
};
