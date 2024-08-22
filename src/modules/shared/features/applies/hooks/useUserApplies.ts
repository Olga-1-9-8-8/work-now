import { useQuery } from "@tanstack/react-query";
import { mapUniversalEngagement } from "../../../utils";
import { getAllUserApplies } from "../api/apiApplies";

export const useUserApplies = (id: number, isHiring: boolean) => {
  const {
    isLoading: isAppliesLoading,
    error,
    data: applies,
  } = useQuery({
    queryKey: ["applies"],
    queryFn: () => getAllUserApplies({ id, isHiring }),
  });

  return {
    isAppliesLoading,
    appliesError: error,
    appliesData:
      applies && applies.length > 0
        ? applies.map((apply) => mapUniversalEngagement(apply))
        : undefined,
  };
};
