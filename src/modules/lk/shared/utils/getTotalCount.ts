/* eslint-disable unicorn/no-useless-undefined */
import { NavTypes } from "../../../shared/configs/lkNavConfig";
import { LkCountsContextType } from "../types/LkCountsContextType";

export const getTotalCount = (
  value: NavTypes,
  {
    totalAppliesCount,
    totalFavoritesCount,
    totalProfileResumesCount,
    totalProfileVacanciesCount,
  }: LkCountsContextType,
) => {
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
