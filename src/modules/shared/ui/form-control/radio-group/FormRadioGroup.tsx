import { FieldValues, Path, useFormContext } from "react-hook-form";
import { UniversalItemType } from "../../../types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../form/Form";
import { RadioGroup, RadioGroupItem } from "../../radio/RadioGroup";

interface FormRadioGroupProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: UniversalItemType[];
  disabled?: boolean;
}

export const FormRadioGroup = <T extends FieldValues>({
  name,
  label,
  options,
  disabled,
}: FormRadioGroupProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              disabled={disabled}
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex space-x-1"
            >
              {options.map(({ value, title }) => (
                <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={value} />
                  </FormControl>
                  <FormLabel className="text-lg">{title}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
