import { UniversalJobType } from "../../../shared/types";
import { mapItemToApiType } from "../../../shared/utils";

export const createJobDuplicateToApi = (item: UniversalJobType, isHiring: boolean) => {
  const { id, isInApplies, isInFavorites, views, applicantsQuantity, cities, gender, ...itemData } =
    item;

  const newItemData = {
    ...itemData,
    position: `Копия - ${itemData.position}`,
    creationDate: new Date(),
    cities: cities?.map(({ city }) => city),
    views: 0,
    applicantsQuantity: 0,
    ...(isHiring ? { gender } : {}),
  };
  const newItem = mapItemToApiType(newItemData, itemData.userId);
  return newItem;
};
