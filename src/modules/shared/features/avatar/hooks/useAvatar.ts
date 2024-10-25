import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getAvatar } from "../api/apiDownloadAvatar";

export const useAvatar = (avatarValue: string) => {
  const {
    isLoading: isAvatarLoading,
    error,
    data: avatar,
  } = useQuery({
    queryKey: ["avatar", avatarValue],
    queryFn: () => getAvatar(avatarValue),
  });

  return useMemo(
    () => ({
      avatar,
      isAvatarLoading,
      avatarError: error,
    }),
    [avatar, error, isAvatarLoading],
  );
};
