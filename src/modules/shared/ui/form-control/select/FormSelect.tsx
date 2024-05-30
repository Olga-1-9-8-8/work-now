import { FieldValues, Path, useFormContext } from "react-hook-form";
import { UniversalItemType } from "../../../types";
import { FormField, FormItem, FormLabel, FormMessage } from "../../form/Form";
import { Select } from "./Select";

interface FormSelectProps<T extends FieldValues> {
  label: string;
  title: string;
  name: Path<T>;
  options: Required<UniversalItemType<string>>[];
  disabled?: boolean;
}

export const FormSelect = <T extends FieldValues>({
  label,
  title,
  disabled,
  name,
  options,
}: FormSelectProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            disabled={disabled}
            options={options}
            title={title}
            defaultValue={field.value}
            onValueChange={field.onChange}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
