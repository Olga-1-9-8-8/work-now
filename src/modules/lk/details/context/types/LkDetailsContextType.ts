import { User } from "@supabase/supabase-js";
import { UseMutateFunction } from "@tanstack/react-query";
import { UpdateUserTypeProps } from "../../../../shared/services/auth/api/apiAuth";
import { ProfileType } from "../../types/ProfileType";

export interface LkDetailsContextType {
  isUpdatingUser: boolean;
  updateUser: UseMutateFunction<
    {
      user: User;
    },
    Error,
    UpdateUserTypeProps,
    unknown
  >;
  profile?: ProfileType;
  isProfileLoading: boolean;
}
