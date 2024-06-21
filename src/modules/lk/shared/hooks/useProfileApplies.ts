import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../shared/components/pagination";
import { useUrl } from "../../../shared/hooks";
import { getProfileApplies } from "../api/apiProfile";
import { mapProfileApplies } from "../utils/mapProfileApplies";

export const useProfileApplies = () => {
  const queryClient = useQueryClient();

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: profileApplies,
    error,
  } = useQuery({
    queryKey: ["profileApplies", page],
    queryFn: () => getProfileApplies({ page }),
  });

  if (
    profileApplies?.totalCount &&
    page < Math.ceil(profileApplies.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)
  ) {
    queryClient.prefetchQuery({
      queryKey: ["profileApplies", page + 1],
      queryFn: () => getProfileApplies({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["profileApplies", page - 1],
      queryFn: () => getProfileApplies({ page: page - 1 }),
    });
  }

  return {
    isProfileAppliesLoading: isLoading,
    profileAppliesError: error,
    profileApplies: profileApplies ? mapProfileApplies(profileApplies.data) : undefined,
    totalProfileAppliesCount: profileApplies?.totalCount ?? undefined,
  };
};
