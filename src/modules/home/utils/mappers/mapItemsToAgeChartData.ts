/* eslint-disable unicorn/no-array-reduce */
import { LanguageType } from "../../../shared/configs";
import { AgeType, getAgeTitle, getAgeValue } from "../../../shared/types";
import { UniversalItemAnalyticsApiTypeInput } from "../../types/UniversalItemAnalyticsApiTypeInput";

const ageInitialData = {
  young: 0,
  youngAdults: 0,
  adults: 0,
  middleAge: 0,
  olderAge: 0,
} as Record<AgeType, number>;

export const mapItemsToAgeChartData = (
  items: UniversalItemAnalyticsApiTypeInput[],
  language: LanguageType,
) => {
  const ageData = items.reduce((counts, item) => {
    const { age } = item.profiles!;
    if (!age) return counts;

    const ageValue = getAgeValue(Number(age));

    return {
      ...counts,
      [ageValue]: (counts[ageValue] || 0) + 1,
    };
  }, ageInitialData);

  return Object.entries(ageData).map(([title, value]) => ({
    title: getAgeTitle(title as AgeType, language),
    value,
  }));
};
