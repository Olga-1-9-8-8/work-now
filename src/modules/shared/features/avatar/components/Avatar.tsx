import { AvatarProps } from "@radix-ui/react-avatar";
import { UserRound } from "lucide-react";
import { memo } from "react";
import { AvatarBase, AvatarFallback } from "../../../ui/avatar/AvatarBase";
import { AvatarImage } from "./AvatarImage";

interface UserAvatarProps extends AvatarProps {
  icon?: React.ElementType;
  avatar?: string;
  userName?: string;
}

export const Avatar = memo(({ icon, avatar, userName, ...props }: UserAvatarProps) => {
  const Icon = icon ?? UserRound;

  return (
    <AvatarBase {...props}>
      {avatar ? (
        <AvatarImage avatar={avatar} />
      ) : (
        <AvatarFallback className="border-2 border-primary text-3xl">
          {userName && <span className="sr-only">{userName}</span>}
          <Icon className="h-2/4 w-2/4 stroke-primary" />
        </AvatarFallback>
      )}
    </AvatarBase>
  );
});
