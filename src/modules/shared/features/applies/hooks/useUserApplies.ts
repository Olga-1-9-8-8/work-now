import { useQuery } from "@tanstack/react-query";
import { mapUniversalEngagement } from "../../../utils";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { getAllUserApplies } from "../api/apiApplies";

export const useUserApplies = (id: number, isHiring: boolean) => {
  const { t } = useLanguageSwitcher("shared");
  const {
    isLoading: isAppliesLoading,
    error,
    data: applies,
  } = useQuery({
    queryKey: ["applies", id],
    queryFn: () => getAllUserApplies({ id, isHiring, t }),
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
