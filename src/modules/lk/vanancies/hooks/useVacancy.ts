import { useQuery } from "@tanstack/react-query";
import { LanguageType } from "../../../shared/configs";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getVacancy } from "../api/apiVacancies";
import { mapVacancy } from "../utils/mapVacancy";

export const useVacancy = (id?: number) => {
  const { t, language } = useLanguageSwitcher("lk");
  const {
    isLoading,
    data: vacancy,
    error,
  } = useQuery({
    queryKey: ["vacancy", id],
    queryFn: () => getVacancy(t, id),
    retry: false,
  });

  return {
    isLoading,
    error,
    vacancy: vacancy ? mapVacancy(vacancy, language as LanguageType) : undefined,
  };
};
