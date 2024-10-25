import { memo } from "react";
import { FaSpinner } from "react-icons/fa6";
import { AvatarImage as AvatarImageBase } from "../../../ui/avatar/AvatarBase";
import { useAvatar } from "../hooks/useAvatar";

interface UserAvatarProps {
  avatar: string;
}

export const AvatarImage = memo(({ avatar }: UserAvatarProps) => {
  const { avatar: src, isAvatarLoading } = useAvatar(avatar);

  if (isAvatarLoading)
    return (
      <div className="flex w-full items-center justify-center">
        <FaSpinner className="h-7 w-7 animate-spin-slow text-secondary" />
      </div>
    );
  return <AvatarImageBase alt="Аватар" src={src} />;
});
