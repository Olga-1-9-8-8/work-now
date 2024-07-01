import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getProfile } from "../api/apiProfiles";
import { mapProfile } from "../utils/mapProfile";

export const useProfile = (id?: string) => {
  const {
    isLoading: isProfileLoading,
    error,
    data: profile,
  } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => getProfile(id),
  });

  const memoizedProfile = useMemo(() => (profile ? mapProfile(profile) : undefined), [profile]);

  return { profile: memoizedProfile, isProfileLoading, error };
};
