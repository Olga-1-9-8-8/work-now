import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { mapVacancy } from "../../shared/utils";
import { getVacancy } from "../api/apiVacancy";

export const useVacancy = () => {
  const { id, companyCode } = useParams();
  const {
    isLoading,
    data: vacancy,
    error,
  } = useQuery({
    queryKey: ["vacancy", id],
    queryFn: () => getVacancy(id, companyCode),
    retry: false,
  });

  return {
    isLoading,
    error,
    vacancy: vacancy ? mapVacancy(vacancy) : undefined,
  };
};
