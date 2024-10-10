import { FieldValues, Path, useFormContext } from "react-hook-form";
import { LanguageType } from "../../../configs";
import { UniversalItemType } from "../../../types";
import { FormField, FormItem, FormLabel, FormMessage } from "../../form/Form";
import { MultiSelect } from "./multi/MultiSelect";

interface FormMultiSelectProps<T extends FieldValues> {
  label: string;
  title: string;
  name: Path<T>;
  options: Required<UniversalItemType<string>>[];
  language: LanguageType;
  disabled?: boolean;
}

export const FormMultiSelect = <T extends FieldValues>({
  label,
  title,
  disabled,
  name,
  language,
  options,
}: FormMultiSelectProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <MultiSelect
              disabled={disabled}
              options={options}
              placeholder={title}
              defaultValue={field.value}
              onValueChange={field.onChange}
              language={language}
              variant="list"
              expandable
            />
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
