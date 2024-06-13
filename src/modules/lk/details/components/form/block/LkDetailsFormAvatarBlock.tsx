/* eslint-disable unicorn/no-useless-undefined */
import { UseMutateFunction } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
import { Avatar } from "../../../../../shared/components/avatar";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { UpdateUserTypeProps } from "../../../api/apiProfiles";
import { LkDetailsFormAvatarBlockFileInput } from "./LkDetailsFormAvatarBlockFileInput";

interface LkDetailsFormAvatarBlockProps {
  avatar?: string;
  updateProfile: UseMutateFunction<
    {
      path: string;
    } | null,
    Error,
    UpdateUserTypeProps,
    unknown
  >;
}

export const LkDetailsFormAvatarBlock = ({
  avatar,
  updateProfile,
}: LkDetailsFormAvatarBlockProps) => {
  return avatar ? (
    <div className="flex items-center justify-evenly gap-4">
      <LkDetailsFormAvatarBlockFileInput updateProfile={updateProfile} />
      <Avatar src={avatar} className="h-20 w-20" />

      <div className=" flex flex-col items-center">
        <Button
          onClick={() => updateProfile({ avatarFile: null })}
          size="icon"
          className="rounded-full"
        >
          <Trash2Icon />
        </Button>
        <p>Удалить</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-4">
      <Avatar className="h-20 w-20" />
      <LkDetailsFormAvatarBlockFileInput updateProfile={updateProfile} className="flex-row gap-2" />
    </div>
  );
};
