import { AvatarProps } from "@radix-ui/react-avatar";
import { UserRound } from "lucide-react";
import { AvatarBase, AvatarFallback, AvatarImage } from "../../../ui/avatar/AvatarBase";

interface UserAvatarProps extends AvatarProps {
  icon?: React.ElementType;
  src?: string;
  userName?: string;
}

export const Avatar = ({ icon, src, userName, ...props }: UserAvatarProps) => {
  const Icon = icon ?? UserRound;

  return (
    <AvatarBase {...props}>
      {src ? (
        <AvatarImage alt="Аватар" src={src} />
      ) : (
        <AvatarFallback className="border-2 border-primary text-3xl">
          {userName && <span className="sr-only">{userName}</span>}
          <Icon className="h-2/4 w-2/4 stroke-primary" />
        </AvatarFallback>
      )}
    </AvatarBase>
  );
};
