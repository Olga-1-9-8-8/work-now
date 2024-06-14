/* eslint-disable unicorn/no-useless-undefined */
import { Trash2Icon } from "lucide-react";
import { Avatar } from "../../../../../shared/components/avatar";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { useLkDetailsContext } from "../../../context";
import { LkDetailsFormAvatarBlockFileInput } from "./LkDetailsFormAvatarBlockFileInput";

interface LkDetailsFormAvatarBlockProps {
  avatarSrc?: string;
}

export const LkDetailsFormAvatarBlock = ({ avatarSrc }: LkDetailsFormAvatarBlockProps) => {
  const { updateUser, isUpdatingUser } = useLkDetailsContext();

  return avatarSrc ? (
    <div className="flex items-center justify-evenly gap-4">
      <LkDetailsFormAvatarBlockFileInput />
      <Avatar src={avatarSrc} className="h-20 w-20" />

      <div className=" flex flex-col items-center">
        <Button
          onClick={() => updateUser({ avatarFile: null })}
          size="icon"
          className="rounded-full"
          disabled={isUpdatingUser}
        >
          <Trash2Icon />
        </Button>
        <p>Удалить</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="h-20 w-20" />
      <LkDetailsFormAvatarBlockFileInput className="flex-row gap-2" />
    </div>
  );
};
