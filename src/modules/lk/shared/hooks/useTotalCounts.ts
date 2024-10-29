import { useQuery } from "@tanstack/react-query";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { getTotalCounts } from "../api/apiCounts";

export const useTotalCounts = () => {
  const { t } = useLanguageSwitcher("lk");

  const {
    isLoading,
    data: totalCounts,
    error,
  } = useQuery({
    queryKey: ["counts"],
    queryFn: () => getTotalCounts(t),
  });

  return {
    isLoading,
    totalCountsError: error,
    resumesCount: totalCounts?.resumesCount ?? undefined,
    vacanciesCount: totalCounts?.vacanciesCount ?? undefined,
    favoritesCount: totalCounts?.favoritesCount ?? undefined,
    appliesCount: totalCounts?.appliesCount ?? undefined,
  };
};
