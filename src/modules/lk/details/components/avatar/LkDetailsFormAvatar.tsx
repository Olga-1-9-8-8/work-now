import { Building2 } from "lucide-react";
import { Avatar } from "../../../../shared/components/avatar";
import { UserEntity } from "../../../../shared/types";

interface LkDetailsFormAvatarBlockProps {
  avatarSrc?: string;
  role: UserEntity;
}

export const LkDetailsFormAvatar = ({ avatarSrc, role }: LkDetailsFormAvatarBlockProps) => {
  return (
    <Avatar
      src={avatarSrc}
      icon={role === UserEntity.Company ? Building2 : undefined}
      className="h-20 w-20"
    />
  );
};
