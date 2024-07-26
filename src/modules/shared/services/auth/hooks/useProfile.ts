import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getProfile } from "../api/apiProfile";
import { mapProfile } from "../utils/mapProfile";
import { useUser } from "./useUser";

export const useProfile = () => {
  const { user } = useUser();

  const {
    isLoading: isProfileLoading,
    error,
    data: profile,
  } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: () => getProfile(user?.id),
  });

  const memoizedProfile = useMemo(() => (profile ? mapProfile(profile) : undefined), [profile]);

  return { profile: memoizedProfile, isProfileLoading, error };
};
