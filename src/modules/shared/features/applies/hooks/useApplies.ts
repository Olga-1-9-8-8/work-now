import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUANTITY_OF_ITEMS_ON_ONE_PAGE } from "../../../components/pagination";
import { useUrl } from "../../../hooks";
import { getApplies } from "../api/apiApplies";
import { mapApplies } from "../utils/mapApplies";

export const useApplies = () => {
  const queryClient = useQueryClient();

  const { getParam } = useUrl();
  const page = Number(getParam("offset")) || 1;

  const {
    isLoading,
    data: applies,
    error,
  } = useQuery({
    queryKey: ["applies", page],
    queryFn: () => getApplies(page),
  });

  if (applies?.totalCount && page < Math.ceil(applies.totalCount / QUANTITY_OF_ITEMS_ON_ONE_PAGE)) {
    queryClient.prefetchQuery({
      queryKey: ["applies", page + 1],
      queryFn: () => getApplies(page + 1),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["applies", page - 1],
      queryFn: () => getApplies(page - 1),
    });
  }

  return {
    isAppliesLoading: isLoading,
    appliesError: error,
    applies: applies ? mapApplies(applies.data, applies.role) : undefined,
    totalAppliesCount: applies?.totalCount ?? undefined,
  };
};
