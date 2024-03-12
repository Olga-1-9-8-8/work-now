import { AvatarProps } from "@radix-ui/react-avatar";
import { UserRound } from "lucide-react";
import { AvatarBase, AvatarFallback, AvatarImage } from "../../../ui/avatar/AvatarBase";
import { User } from "../../user/types/User";

interface UserAvatarProps extends AvatarProps {
  user?: Partial<Pick<User, "image" | "name">>;
  icon?: React.ElementType;
}

export const Avatar = ({ user, icon, ...props }: UserAvatarProps) => {
  const Icon = icon ?? UserRound;

  return (
    <AvatarBase {...props}>
      {user?.image ? (
        <AvatarImage alt="Аватар" src={user.image} />
      ) : (
        <AvatarFallback className="border-2 border-primary text-3xl">
          {user?.name && <span className="sr-only">{user?.name}</span>}
          <Icon className="h-2/4 w-2/4 stroke-primary" />
        </AvatarFallback>
      )}
    </AvatarBase>
  );
};
