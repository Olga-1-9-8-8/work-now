import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { LanguageType } from "../../../configs/internationalization/InternationalizationConfig";
import { useUrl } from "../../../hooks";
import { mapResumeVacancyItem } from "../../../utils";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getApplies } from "../api/apiApplies";

export const useApplies = () => {
  const queryClient = useQueryClient();
  const { t, language } = useLanguageSwitcher("shared");

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: applies,
    error,
  } = useQuery({
    queryKey: ["applies", page],
    queryFn: async () => {
      const appliesData = await getApplies(page, t);
      if (appliesData?.data?.resumes) {
        appliesData.data.resumes.forEach((resume) => {
          queryClient.setQueryData(["resume", resume.id], resume);
        });
      }

      if (appliesData?.data.vacancies) {
        appliesData.data.vacancies.forEach((vacancy) => {
          queryClient.setQueryData(["vacancy", vacancy.id], vacancy);
        });
      }

      return appliesData;
    },
  });

  if (applies?.totalCount && page < Math.ceil(applies.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)) {
    queryClient.prefetchQuery({
      queryKey: ["applies", page + 1],
      queryFn: () => getApplies(page + 1, t),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["applies", page - 1],
      queryFn: () => getApplies(page - 1, t),
    });
  }

  return {
    isAppliesLoading: isLoading,
    appliesError: error,
    applies: applies?.data
      ? mapResumeVacancyItem(applies.data, language as LanguageType)
      : undefined,
    totalAppliesCount: applies?.totalCount ?? undefined,
  };
};
