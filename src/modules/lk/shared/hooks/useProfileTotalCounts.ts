/* eslint-disable unicorn/no-useless-undefined */
import { NavTypes } from "../../../shared/configs/lkNavConfig";
import { useProfileApplies } from "./useProfileApplies";
import { useProfileFavorites } from "./useProfileFavorites";
import { useProfileResumes } from "./useProfileResumes";

export function useProfileTotalCounts() {
  const { totalProfileResumesCount } = useProfileResumes();
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
