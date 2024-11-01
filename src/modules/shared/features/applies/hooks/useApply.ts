import { useQuery } from "@tanstack/react-query";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { getApply } from "../api/apiApply";

export const useApply = (id: number) => {
  const { t } = useLanguageSwitcher("shared");

  const {
    isLoading: isInAppliesLoading,
    data: isInApplies,
    error,
  } = useQuery({
    queryKey: ["applies", id],
    queryFn: () => getApply(id, t),
    select: (data) => !!data,
  });

  return {
    isInAppliesLoading,
    isInAppliesError: error,
    isInApplies,
  };
};
