import { UniversalItemApiTypeInput } from "../../api";
import { UniversalJobType } from "../../types";
import { mapUniversalItem } from "./mapUniversalItem";

export const mapUniversalItems = (items: UniversalItemApiTypeInput[]): UniversalJobType[] => {
  return items.map((item) => mapUniversalItem(item));
};
