import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useUrl } from "../../../shared/hooks";
import { mapUniversalItem } from "../../../shared/utils";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { getProfileResumes } from "../api/apiProfile";

export const useProfileResumes = () => {
  const queryClient = useQueryClient();

  const { t } = useLanguageSwitcher("lk");

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: profileResumes,
    error,
  } = useQuery({
    queryKey: ["resumes", page],
    queryFn: async () => {
      const resumesData = await getProfileResumes(page, t);
      if (resumesData) {
        resumesData.data.forEach((resumeData) => {
          const { id } = resumeData;
          queryClient.setQueryData(["resumes", id], resumeData);
        });
      }
      return resumesData;
    },
  });

  if (
    profileResumes?.totalCount &&
    page < Math.ceil(profileResumes.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["resumes", page + 1],
      queryFn: () => getProfileResumes(page + 1, t),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["resumes", page - 1],
      queryFn: () => getProfileResumes(page - 1, t),
    });
  }

  return {
    isProfileResumesLoading: isLoading,
    profileResumesError: error,
    profileResumes: profileResumes?.data.map((resume) => mapUniversalItem(resume)),
    totalProfileResumesCount: profileResumes?.totalCount ?? undefined,
  };
};
