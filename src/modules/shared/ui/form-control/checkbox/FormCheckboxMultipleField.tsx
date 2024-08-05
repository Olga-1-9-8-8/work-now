import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { UniversalItemType } from "../../../types";
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
  items: Required<UniversalItemType<string>>[];
}

export const FormCheckboxMultipleField = <T extends FieldValues>({
  label,
  description,
  name,
  items,
  ...props
}: FormCheckboxFieldProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField<T>
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          {items.map((item) => (
            <FormField
              key={item.value}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row items-start space-x-4 space-y-0 py-1"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.value])
                            : field.onChange(
                                field.value?.filter((value: string) => value !== item.value),
                              );
                        }}
                        {...props}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.title}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
