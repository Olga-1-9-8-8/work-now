import { ProfileApiTypeInput } from "../../../resume/shared/types";
import { ProfileType } from "../../../shared/services/auth";
import { GenderType, UserEntity } from "../../../shared/types";
import { parseDateFromString } from "../../../shared/utils/helpers";

export const mapProfile = (profile: ProfileApiTypeInput): ProfileType => {
  return {
    id: profile.id,
    age: profile.age ?? undefined,
    avatar: profile.avatar ?? undefined,
    gender: (profile.gender as GenderType) ?? undefined,
    email: profile.email,
    userName: profile.username,
    phone: profile.phone,
    role: profile.role as UserEntity,
    updatedAt: profile.updated_at ? parseDateFromString(profile.updated_at) : undefined,
  };
};
