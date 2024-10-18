import * as SliderPrimitive from "@radix-ui/react-slider";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../form/Form";
import { Slider } from "../../slider/Slider";

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

export interface FormInputFieldProps<T extends FieldValues> extends SliderProps {
  getLabel: (value: number[]) => string;
  description?: string;
  name: Path<T>;
  className?: string;
}

export const FormSliderField = <T extends FieldValues>({
  getLabel,
  description,
  name,
  min = 0,
  max = 500_000,
  step = 1000,
  className,
  ...props
}: FormInputFieldProps<T>) => {
  const { control } = useFormContext<T>();
  return (
    <FormField<T>
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <FormItem>
            <FormLabel className="text-md">{getLabel(value)}</FormLabel>
            <FormControl>
              <Slider
                min={min}
                max={max}
                step={step}
                value={value.length > 0 ? [...value] : [0, 0]}
                onValueChange={onChange}
                className={className}
                {...props}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
