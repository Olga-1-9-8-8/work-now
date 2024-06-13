import { ProfileApiTypeInput } from "../../../resume/shared/types";
import { GenderType } from "../../../shared/types";
import { parseDateFromString } from "../../../shared/utils/helpers";

export const mapProfile = (profile: ProfileApiTypeInput) => {
  return {
    id: profile.id,
    age: profile.age ?? undefined,
    avatar: profile.avatar ?? undefined,
    gender: (profile.gender as GenderType) ?? undefined,
    email: profile.email,
    userName: profile.username,
    phone: profile.phone,
    updatedAt: profile.updated_at ? parseDateFromString(profile.updated_at) : undefined,
  };
};
