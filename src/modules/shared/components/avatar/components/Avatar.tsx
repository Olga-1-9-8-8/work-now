import { AvatarProps } from "@radix-ui/react-avatar";
import { UserRound } from "lucide-react";
import { useAuthContext } from "../../../services/auth";
import { AvatarBase, AvatarFallback, AvatarImage } from "../../../ui/avatar/AvatarBase";
import { Spinner } from "../../../ui/spinner/Spinner";

interface UserAvatarProps extends AvatarProps {
  icon?: React.ElementType;
}

export const Avatar = ({ icon, ...props }: UserAvatarProps) => {
  const { user, isUserLoading } = useAuthContext();
  const Icon = icon ?? UserRound;

  return isUserLoading ? (
    <Spinner />
  ) : (
    <AvatarBase {...props}>
      {user?.user_metadata.avatar ? (
        <AvatarImage alt="Аватар" src={user?.user_metadata.avatar} />
      ) : (
        <AvatarFallback className="border-2 border-primary text-3xl">
          {user?.user_metadata.userName && (
            <span className="sr-only">{user?.user_metadata.userName}</span>
          )}
          <Icon className="h-2/4 w-2/4 stroke-primary" />
        </AvatarFallback>
      )}
    </AvatarBase>
  );
};
