import { ComponentPropsWithoutRef } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../form/Form";
import { Textarea } from "../../textarea/Textarea";

export interface FormTextareaFieldProps<T extends FieldValues>
  extends ComponentPropsWithoutRef<"textarea"> {
  label: string;
  description?: string;
  name: Path<T>;
}

export const FormTextareaField = <T extends FieldValues>({
  label,
  description,
  name,
  ...props
}: FormTextareaFieldProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField<T>
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
