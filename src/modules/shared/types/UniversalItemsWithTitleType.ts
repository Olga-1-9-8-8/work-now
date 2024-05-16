import { UniversalItemType } from "./UniversalItemType";

export interface UniversalItemsWithTitleType<T = any> {
  title: string;
  items: UniversalItemType<T>[];
  isVacancyOnly?: boolean;
}
