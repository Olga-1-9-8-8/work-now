import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useFiltersParams } from "../../../shared/features/filters/server-side";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { getResumes } from "../api/apiResumes";

export const useResumes = () => {
  const queryClient = useQueryClient();

  const { filters, sortArr, page } = useFiltersParams();
  const {
    isLoading,
    data: resumes,
    error,
  } = useQuery({
    queryKey: ["resumes", filters, undefined, page],
    queryFn: async () => {
      const resumesData = await getResumes({ filters, sortArr, page });

      resumesData.data.forEach((resumeData) => {
        queryClient.setQueryData(["resume", resumeData.id], resumeData);
      });
      return resumesData;
    },
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
    resumes: resumes?.data?.map(mapUniversalItemWithProfile),
    totalCount: resumes?.totalCount ?? undefined,
  };
};
