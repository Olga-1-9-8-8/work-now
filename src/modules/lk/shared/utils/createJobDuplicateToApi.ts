import { LanguageType } from "../../../shared/configs";
import { UniversalJobType } from "../../../shared/types";
import { mapItemToApiType } from "../../../shared/utils";

export const createJobDuplicateToApi = (
  item: UniversalJobType,
  isHiring: boolean,
  t: (key: string) => string,
  lang: LanguageType,
) => {
  const { id, views, applicantsQuantity, cities, gender, language, ...itemData } = item;

  const newItemData = {
    ...itemData,
    position: `${t("lk.copy")} - ${itemData.position}`,
    creationDate: new Date(),
    cities: cities?.map(({ city }) => city),
    views: 0,
    applicantsQuantity: 0,
    ...(isHiring ? { gender } : {}),
  };
  const newItem = mapItemToApiType(newItemData, itemData.userId, lang);
  return newItem;
};
