/* eslint-disable unicorn/no-array-reduce */
import { LanguageType } from "../../../shared/configs/internationalization/InternationalizationConfig";
import { GenderType, getGenderTitle } from "../../../shared/types";
import { UniversalItemAnalyticsApiTypeInput } from "../../types/UniversalItemAnalyticsApiTypeInput";

export const mapItemsToGenderChartData = (
  items: UniversalItemAnalyticsApiTypeInput[],
  language: LanguageType,
) => {
  const genderData = items.reduce(
    (counts, item) => {
      const { gender } = item.profiles!;
      if (!gender) return counts;
      return {
        ...counts,
        [gender]: (counts[gender as GenderType] || 0) + 1,
      };
    },
    { female: 0, male: 0 } as Record<GenderType, number>,
  );

  return Object.entries(genderData).map(([title, value]) => ({
    title: getGenderTitle(title as GenderType, language),
    value,
  }));
};
