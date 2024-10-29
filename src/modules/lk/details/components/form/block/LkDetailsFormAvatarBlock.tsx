import { Trash2Icon } from "lucide-react";
import { useUpdateUser } from "../../../../../shared/services/auth";
import { UserEntity } from "../../../../../shared/types";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { useLanguageSwitcher } from "../../../../../shared/widgets/languages-switcher";
import { LkDetailsFormAvatar } from "../../avatar/LkDetailsFormAvatar";
import { LkDetailsFormAvatarBlockFileInput } from "./LkDetailsFormAvatarBlockFileInput";

interface LkDetailsFormAvatarBlockProps {
  avatar?: string;
  role: UserEntity;
}

export const LkDetailsFormAvatarBlock = ({ avatar, role }: LkDetailsFormAvatarBlockProps) => {
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const { t } = useLanguageSwitcher("lk");

  return avatar ? (
    <div className="flex items-center justify-evenly gap-4">
      <LkDetailsFormAvatarBlockFileInput />
      <LkDetailsFormAvatar avatar={avatar} role={role} />

      <div className=" flex flex-col items-center">
        <Button
          onClick={() => updateUser({ avatarFile: null })}
          type="button"
          size="icon"
          className="rounded-full"
          disabled={isUpdatingUser}
        >
          <Trash2Icon />
        </Button>
        <p>{t("lk.delete")}</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-4">
      <LkDetailsFormAvatar avatar={avatar} role={role} />
      <LkDetailsFormAvatarBlockFileInput className="flex-row gap-2" />
    </div>
  );
};
