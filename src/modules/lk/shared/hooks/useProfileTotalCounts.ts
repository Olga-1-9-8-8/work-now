/* eslint-disable unicorn/no-useless-undefined */
import { NavTypes } from "../../../shared/configs/lkNavConfig";
import { useApplies } from "../../../shared/features/applies/hooks/useApplies";
import { useFavorites } from "../../../shared/features/favorites/hooks/useFavorites";
import { useProfileResumes } from "./useProfileResumes";
import { useProfileVacancies } from "./useProfileVacancies";

export function useProfileTotalCounts() {
  const { totalProfileResumesCount } = useProfileResumes();
  const { totalProfileVacanciesCount } = useProfileVacancies();
  const { totalAppliesCount } = useApplies();
  const { totalFavoritesCount } = useFavorites();

  const getTotalCount = (value: NavTypes) => {
    switch (value) {
      case "applies": {
        return totalAppliesCount;
      }
      case "resumes": {
        return totalProfileResumesCount;
      }
      case "vacancies": {
        return totalProfileVacanciesCount;
      }
      case "favorites": {
        return totalFavoritesCount;
      }
      default: {
        return undefined;
      }
    }
  };

  return { getTotalCount };
}
