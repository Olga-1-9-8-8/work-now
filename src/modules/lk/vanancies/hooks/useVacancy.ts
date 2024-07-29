import { useQuery } from "@tanstack/react-query";
import { getVacancy } from "../api/apiVacancies";
import { mapVacancy } from "../utils/mapVacancy";

export const useVacancy = (id?: number) => {
  const {
    isLoading,
    data: vacancies,
    error,
  } = useQuery({
    queryKey: ["vacancy", id],
    queryFn: () => getVacancy(id),
    retry: false,
  });

  return {
    isLoading,
    error,
    vacancies: vacancies ? mapVacancy(vacancies) : undefined,
  };
};
