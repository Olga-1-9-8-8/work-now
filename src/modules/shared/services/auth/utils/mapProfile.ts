import { ProfileApiTypeInput } from "../../../api";
import { GenderType, UserEntity } from "../../../types";
import { parseDateFromString } from "../../../utils/helpers";
import { ProfileType } from "../types/ProfileType";

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
