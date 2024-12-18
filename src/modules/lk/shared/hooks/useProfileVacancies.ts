import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { LanguageType } from "../../../shared/configs";
import { useUrl } from "../../../shared/hooks";
import { mapUniversalItem } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { getProfileVacancies } from "../api/apiProfile";

export const useProfileVacancies = () => {
  const queryClient = useQueryClient();
  const { t, language } = useLanguageSwitcher("lk");

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: profileVacancies,
    error,
  } = useQuery({
    queryKey: ["vacancies", page, language],
    queryFn: async () => {
      const vacanciesData = await getProfileVacancies(page, t, language as LanguageType);

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
      queryFn: () => getProfileVacancies(page + 1, t, language as LanguageType),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["vacancies", page - 1],
      queryFn: () => getProfileVacancies(page - 1, t, language as LanguageType),
    });
  }

  return {
    isProfileVacanciesLoading: isLoading,
    profileVacanciesError: error,
    profileVacancies: profileVacancies?.data.map((vacancy) =>
      mapUniversalItem(vacancy, language as LanguageType),
    ),
    totalProfileVacanciesCount: profileVacancies?.totalCount ?? undefined,
  };
};
