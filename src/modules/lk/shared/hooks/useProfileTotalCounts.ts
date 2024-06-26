/* eslint-disable unicorn/no-useless-undefined */
import { NavTypes } from "../../../shared/configs/lkNavConfig";
import { useProfileApplies } from "./useProfileApplies";
import { useProfileFavorites } from "./useProfileFavorites";
import { useProfileResumes } from "./useProfileResumes";
import { useProfileVacancies } from "./useProfileVacancies";

export function useProfileTotalCounts() {
  const { totalProfileResumesCount } = useProfileResumes();
  const { totalProfileVacanciesCount } = useProfileVacancies();
  const { totalProfileAppliesCount } = useProfileApplies();
  const { totalProfileFavoritesCount } = useProfileFavorites();

  const getTotalCount = (value: NavTypes) => {
    switch (value) {
      case "applies": {
        return totalProfileAppliesCount;
      }
      case "resumes": {
        return totalProfileResumesCount;
      }
      case "vacancies": {
        return totalProfileVacanciesCount;
      }
      case "favorites": {
        return totalProfileFavoritesCount;
      }
      default: {
        return undefined;
      }
    }
  };

  return { getTotalCount };
}
