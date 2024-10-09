import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getVacancy } from "../api/apiVacancy";

export const useVacancy = () => {
  const { t } = useLanguageSwitcher("vacancy");
  const { id } = useParams();
  const vacancyId = id ? Number(id) : undefined;

  const {
    isLoading,
    data: vacancy,
    error,
  } = useQuery({
    queryKey: ["vacancy", vacancyId],
    queryFn: () => getVacancy(t, vacancyId),
    retry: false,
  });

  return {
    isLoading,
    error,
    vacancy: vacancy ? mapUniversalItemWithProfile(vacancy) : undefined,
  };
};
