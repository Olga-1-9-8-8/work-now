/* eslint-disable unicorn/no-useless-undefined */
import { Trash2Icon, UserRound } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { Avatar } from "../../../../../shared/components/avatar";
import { User } from "../../../../../shared/components/user";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { LkDetailsFormType } from "../../../types/LkDetailsFormType";
import { LkDetailsFormAvatarBlockFileInput } from "./LkDetailsFormAvatarBlockFileInput";

interface LkDetailsFormAvatarBlockProps {
  user: Partial<User>;
}

export const LkDetailsFormAvatarBlock = ({ user }: LkDetailsFormAvatarBlockProps) => {
  const form = useFormContext<LkDetailsFormType>();

  return user.image ? (
    <div className="flex items-center justify-evenly gap-4">
      <LkDetailsFormAvatarBlockFileInput />

      <Avatar className="h-20 w-20" user={{ image: user.image, name: user.name }} />
      <div className=" flex flex-col items-center">
        <Button
          onClick={() => form.setValue("image", {} as File)}
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
      <Avatar className="h-20 w-20" icon={UserRound} />
      <LkDetailsFormAvatarBlockFileInput className="flex-row gap-2" />
    </div>
  );
};
