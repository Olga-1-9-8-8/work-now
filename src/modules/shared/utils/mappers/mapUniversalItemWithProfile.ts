import { UniversalItemWithProfileApiTypeInput } from "../../api";
import { mapProfile } from "../../services/auth";
import { mapUniversalItem } from "./mapUniversalItem";

export const mapUniversalItemWithProfile = (item: UniversalItemWithProfileApiTypeInput) => {
  const { profiles, ...resumeData } = item;
  const profileData = profiles ? mapProfile(profiles) : null;
  if (!profileData) {
    return { ...mapUniversalItem(resumeData) };
  }

  return { ...profileData, ...mapUniversalItem(resumeData) };
};
