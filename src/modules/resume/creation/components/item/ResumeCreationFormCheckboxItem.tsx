import { useFormContext } from "react-hook-form";
import { SearchOptionsItem } from "../../../../shared/configs/searchOptionsConfig";
import { Checkbox } from "../../../../shared/ui/checkbox/Checkbox";
import { FormControl, FormField, FormItem, FormLabel } from "../../../../shared/ui/form/Form";
import { Label } from "../../../../shared/ui/labels/Label";
import { ResumeCreationFormType } from "../../types/ResumeCreationFormType";

interface ResumeCreationFormCheckboxItemProps extends SearchOptionsItem {
  disabled: boolean;
  name: "employment" | "schedule";
}

export const ResumeCreationFormCheckboxItem = ({
  title,
  options,
  disabled,
  name,
}: ResumeCreationFormCheckboxItemProps) => {
  const { control } = useFormContext<ResumeCreationFormType>();

  return (
    <div className="flex flex-col space-y-4">
      <Label htmlFor="framework">{title}</Label>
      {options.map((item) => (
        <FormField
          key={item.value}
          control={control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    disabled={disabled}
                    checked={field.value?.includes(item.value)}
                    onCheckedChange={(checked) => {
                      return checked
                        ? field.onChange([...field.value, item.value])
                        : field.onChange(field.value?.filter((value) => value !== item.value));
                    }}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">{item.title}</FormLabel>
              </FormItem>
            );
          }}
        />
      ))}
    </div>
  );
};
