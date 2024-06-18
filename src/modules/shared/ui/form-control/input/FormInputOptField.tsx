import { OTPInputProps } from "input-otp";
import { FieldValues, Path, useFormContext } from "react-hook-form";
import { createEmptyArray } from "../../../utils/helpers";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../form/Form";
import { InputOtp, InputOtpGroup, InputOtpSlot } from "../../inputs/InputOTP";

export type FormInputFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  maxLength: number;
  description?: string;
} & Omit<OTPInputProps, "render">;

export const FormInputOptField = <T extends FieldValues>({
  label,
  name,
  maxLength,
  description,
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
            <InputOtp {...field} {...props} maxLength={maxLength}>
              <InputOtpGroup>
                {createEmptyArray(maxLength).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <InputOtpSlot key={index} index={index} />
                ))}
              </InputOtpGroup>
            </InputOtp>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
