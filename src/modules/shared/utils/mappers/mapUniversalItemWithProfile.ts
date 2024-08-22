import { UniversalItemWithProfileApiTypeInput } from "../../api";
import { mapProfile } from "../../services/auth";
import { mapUniversalItem } from "./mapUniversalItem";

export const mapUniversalItemWithProfile = (item: UniversalItemWithProfileApiTypeInput) => {
  const { profiles, ...data } = item;
  const profileData = profiles ? mapProfile(profiles) : null;
  if (!profileData) {
    return { ...mapUniversalItem(data) };
  }

  const itemData = mapUniversalItem(data);
  return { ...profileData, ...itemData, gender: profileData.gender || itemData.gender };
};
