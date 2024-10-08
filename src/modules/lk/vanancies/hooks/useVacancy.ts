import { useQuery } from "@tanstack/react-query";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getVacancy } from "../api/apiVacancies";
import { mapVacancy } from "../utils/mapVacancy";

export const useVacancy = (id?: number) => {
  const { t } = useLanguageSwitcher("lk");
  const {
    isLoading,
    data: vacancies,
    error,
  } = useQuery({
    queryKey: ["vacancy", id],
    queryFn: () => getVacancy(t, id),
    retry: false,
  });

  return {
    isLoading,
    error,
    vacancies: vacancies ? mapVacancy(vacancies) : undefined,
  };
};
