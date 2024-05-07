import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useFiltersParams } from "../../../shared/features/filters/hooks/useFiltersParams";
import { getResumes } from "../api/apiResumes";
import { mapResumes } from "../utils/mapResumes";

export const useResumes = () => {
  const queryClient = useQueryClient();

  const { filters, sortArr, page } = useFiltersParams();
  const {
    isLoading,
    data: resumes,
    error,
  } = useQuery({
    queryKey: ["resumes", filters, undefined, page],
    queryFn: () => getResumes({ filters, sortArr, page }),
  });

  if (resumes?.totalCount && page < Math.ceil(resumes.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)) {
    queryClient.prefetchQuery({
      queryKey: ["resumes", filters, undefined, page + 1],
      queryFn: () => getResumes({ filters, sortArr, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["resumes", filters, undefined, page - 1],
      queryFn: () => getResumes({ filters, sortArr, page: page - 1 }),
    });
  }

  return {
    isLoading,
    error,
    resumes: resumes?.data ? mapResumes(resumes.data) : undefined,
    totalCount: resumes?.totalCount ?? undefined,
  };
};
