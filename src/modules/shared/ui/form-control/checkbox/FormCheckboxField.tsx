import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { Checkbox } from "../../checkbox/Checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../form/Form";

export interface FormCheckboxFieldProps<T extends FieldValues>
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string;
  description?: string;
  name: Path<T>;
}

export const FormCheckboxField = <T extends FieldValues>({
  label,
  description,
  name,
  ...props
}: FormCheckboxFieldProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField<T>
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <div className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                {...field}
                {...props}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
              <FormMessage />
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};
