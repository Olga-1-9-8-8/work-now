import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { getApply } from "../api/apiApply";

export const useApply = (id: number) => {
  const { t } = useLanguageSwitcher("shared");

  const {
    isLoading: isInAppliesLoading,
    data: applies,
    error,
  } = useQuery({
    queryKey: ["apply", id],
    queryFn: () => getApply(id, t),
  });

  return useMemo(
    () => ({
      isInAppliesLoading,
      isInAppliesError: error,
      isInApplies: !!applies,
    }),
    [error, applies, isInAppliesLoading],
  );
};
