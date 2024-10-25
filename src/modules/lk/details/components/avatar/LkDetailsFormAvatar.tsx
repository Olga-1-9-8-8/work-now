import { Building2 } from "lucide-react";
import { Avatar } from "../../../../shared/features/avatar";
import { UserEntity } from "../../../../shared/types";

interface LkDetailsFormAvatarBlockProps {
  avatar?: string;
  role: UserEntity;
}

export const LkDetailsFormAvatar = ({ avatar, role }: LkDetailsFormAvatarBlockProps) => {
  return (
    <Avatar
      avatar={avatar}
      icon={role === UserEntity.Company ? Building2 : undefined}
      className="h-20 w-20"
    />
  );
};
