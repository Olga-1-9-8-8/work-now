import { useQuery } from "@tanstack/react-query";
import { getVacancies } from "../api/apiVacancies";
import { mapVacancies } from "../utils/mapVacancies";

export const useVacancies = () => {
  const {
    isLoading,
    data: vacancies,
    error,
  } = useQuery({
    queryKey: ["vacancies"],
    queryFn: getVacancies,
  });

  return {
    isLoading,
    error,
    vacancies: vacancies ? mapVacancies(vacancies) : undefined,
    totalCount: vacancies?.length,
  };
};
