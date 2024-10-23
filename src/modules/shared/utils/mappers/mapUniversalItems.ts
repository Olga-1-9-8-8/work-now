import { UniversalItemApiTypeInput } from "../../api";
import { LanguageType } from "../../configs";
import { UniversalJobType } from "../../types";
import { mapUniversalItem } from "./mapUniversalItem";

export const mapUniversalItems = (
  items: UniversalItemApiTypeInput[],
  language: LanguageType,
): UniversalJobType[] => {
  return items.map((item) => mapUniversalItem(item, language));
};
