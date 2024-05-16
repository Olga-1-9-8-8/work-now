import { BadgeItem } from "../types/BadgeType";

export const getBadgesTitle = <T>(value: T | T[]): BadgeItem<T>[] => {
  return Array.isArray(value)
    ? value.map((item) => {
        return { title: item };
      })
    : [{ title: value }];
};
