import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useUrl } from "../../../shared/hooks";
import { getProfileResumes } from "../api/apiProfile";
import { mapProfileResumes } from "../utils/mapProfileResumes";

export const useProfileResumes = () => {
  const queryClient = useQueryClient();

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: profileResumes,
    error,
  } = useQuery({
    queryKey: ["profileResumes", page],
    queryFn: () => getProfileResumes({ page }),
  });

  if (
    profileResumes?.totalCount &&
    page < Math.ceil(profileResumes.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["profileResumes", page + 1],
      queryFn: () => getProfileResumes({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["profileResumes", page - 1],
      queryFn: () => getProfileResumes({ page: page - 1 }),
    });
  }

  return {
    isProfileResumesLoading: isLoading,
    profileResumesError: error,
    profileResumes: profileResumes ? mapProfileResumes(profileResumes.data) : undefined,
    totalProfileResumesCount: profileResumes?.totalCount ?? undefined,
  };
};
