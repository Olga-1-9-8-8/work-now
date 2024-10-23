import { UniversalItemWithProfileApiTypeInput } from "../../api";
import { LanguageType } from "../../configs";
import { mapProfile } from "../../services/auth";
import { mapUniversalItem } from "./mapUniversalItem";

export const mapUniversalItemWithProfile = (
  item: UniversalItemWithProfileApiTypeInput,
  language: LanguageType,
) => {
  const { profiles, ...data } = item;
  const profileData = profiles ? mapProfile(profiles) : null;
  if (!profileData) {
    return { ...mapUniversalItem(data, language) };
  }

  const itemData = mapUniversalItem(data, language);
  return { ...profileData, ...itemData, gender: profileData.gender || itemData.gender };
};
