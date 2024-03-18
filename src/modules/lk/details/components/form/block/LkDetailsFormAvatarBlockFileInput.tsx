import { Camera } from "lucide-react";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../../../../shared/ui/buttons/Button";
import { FormControl, FormField, FormItem, FormMessage } from "../../../../../shared/ui/form/Form";
import { Input } from "../../../../../shared/ui/inputs/Input";
import { cn } from "../../../../../shared/utils/cn";
import { LkDetailsFormType } from "../../../types/LkDetailsFormType";

interface LkDetailsFormAvatarBlockFileInputProps {
  className?: string;
}

export const LkDetailsFormAvatarBlockFileInput = ({
  className,
}: LkDetailsFormAvatarBlockFileInputProps) => {
  const { control, register } = useFormContext<LkDetailsFormType>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Button onClick={() => inputRef?.current?.click()} size="icon" className="rounded-full">
        <Camera />
      </Button>
      <FormField
        control={control}
        name="image"
        render={() => (
          <FormItem className="hidden">
            <FormControl>
              <Input type="file" accept="image/*" {...register("image")} ref={inputRef} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      Загрузить
    </div>
  );
};
