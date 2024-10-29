import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { LanguageType } from "../../../shared/configs";
import { sortClientData } from "../../../shared/features/filters/client-side";
import { useFiltersParams } from "../../../shared/features/filters/server-side";
import { mapUniversalItemWithProfile } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { getResumes } from "../api/apiResumes";

export const useResumes = () => {
  const queryClient = useQueryClient();
  const { t, language } = useLanguageSwitcher("resume");
  const { filters, sort, page } = useFiltersParams();

  const {
    isLoading,
    data: resumes,
    error,
  } = useQuery({
    queryKey: ["resumes", filters, sort, page, language],
    queryFn: async () => {
      const resumesData = await getResumes({ filters, sort, page, t, language });

      resumesData.data.forEach((resumeData) => {
        queryClient.setQueryData(["resume", resumeData.id], resumeData);
      });
      return resumesData;
    },
  });

  if (resumes?.totalCount && page < Math.ceil(resumes.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)) {
    queryClient.prefetchQuery({
      queryKey: ["resumes", filters, undefined, page + 1],
      queryFn: () => getResumes({ filters, sort, page: page + 1, t, language }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["resumes", filters, undefined, page - 1],
      queryFn: () => getResumes({ filters, sort, page: page - 1, t, language }),
    });
  }
  if (sort.column === "salary" && resumes?.data) {
    sortClientData(sort, resumes.data);
  }

  return {
    isLoading,
    error,
    resumes: resumes?.data?.map((item) =>
      mapUniversalItemWithProfile(item, language as LanguageType),
    ),
    totalCount: resumes?.totalCount ?? undefined,
  };
};
