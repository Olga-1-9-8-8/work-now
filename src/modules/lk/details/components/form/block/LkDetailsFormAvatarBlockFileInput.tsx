import { Camera } from "lucide-react";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { FormControl, FormField, FormItem, FormMessage } from "../../../../../shared/ui/form/Form";
import { Input } from "../../../../../shared/ui/inputs/Input";
import { cn } from "../../../../../shared/utils/cn";
import { useLkDetailsContext } from "../../../context";
import { LkDetailsFormType } from "../../../types/LkDetailsFormType";

interface LkDetailsFormAvatarBlockFileInputProps {
  className?: string;
}

export const LkDetailsFormAvatarBlockFileInput = ({
  className,
}: LkDetailsFormAvatarBlockFileInputProps) => {
  const { updateUser, isUpdatingUser } = useLkDetailsContext();

  const { control } = useFormContext<LkDetailsFormType>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) updateUser({ avatarFile: file });
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Button
        onClick={() => {
          inputRef?.current?.click();
        }}
        type="button"
        size="icon"
        className="rounded-full"
        disabled={isUpdatingUser}
      >
        <Camera />
      </Button>
      <FormField
        control={control}
        name="avatar"
        render={() => (
          <FormItem className="hidden">
            <FormControl>
              <Input type="file" accept="image/*" ref={inputRef} onChange={handleChange} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      Загрузить
    </div>
  );
};
