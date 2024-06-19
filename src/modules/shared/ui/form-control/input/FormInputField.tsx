import { FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../form/Form";
import { Input, InputProps } from "../../inputs/Input";

export interface FormInputFieldProps<T extends FieldValues> extends InputProps {
  label: string;
  name: Path<T>;
}

export const FormInputField = <T extends FieldValues>({
  label,
  name,
  ...props
}: FormInputFieldProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField<T>
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input autoComplete="off" autoCorrect="off" {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
