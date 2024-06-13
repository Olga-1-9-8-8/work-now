import { UseMutateFunction } from "@tanstack/react-query";
import { Camera } from "lucide-react";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { FormControl, FormField, FormItem, FormMessage } from "../../../../../shared/ui/form/Form";
import { Input } from "../../../../../shared/ui/inputs/Input";
import { cn } from "../../../../../shared/utils/cn";
import { UpdateUserTypeProps } from "../../../api/apiProfiles";
import { LkDetailsFormType } from "../../../types/LkDetailsFormType";

interface LkDetailsFormAvatarBlockFileInputProps {
  updateProfile: UseMutateFunction<
    {
      path: string;
    } | null,
    Error,
    UpdateUserTypeProps,
    unknown
  >;
  className?: string;
}

export const LkDetailsFormAvatarBlockFileInput = ({
  updateProfile,
  className,
}: LkDetailsFormAvatarBlockFileInputProps) => {
  const { control } = useFormContext<LkDetailsFormType>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) updateProfile({ avatarFile: file });
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Button
        onClick={() => {
          inputRef?.current?.click();
        }}
        size="icon"
        className="rounded-full"
      >
        <Camera />
      </Button>
      <FormField
        control={control}
        name="avatar"
        render={(field) => (
          <FormItem className="hidden">
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleChange}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      Загрузить
    </div>
  );
};
