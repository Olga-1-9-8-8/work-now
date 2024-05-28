import { FieldValues, Path, useFormContext } from "react-hook-form";
import { useResponsiveContext } from "../../../../../responsive";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../../ui/form/Form";
import {
  InputOtp,
  InputOtpGroup,
  InputOtpSeparator,
  InputOtpSlot,
} from "../../../../../ui/inputs/InputOTP";

interface AuthPhoneFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  disabled?: boolean;
}

export const AuthPhoneField = <T extends FieldValues>({
  label,
  disabled,
  name,
}: AuthPhoneFieldProps<T>) => {
  const isMobile = useResponsiveContext();
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <InputOtp maxLength={10} disabled={disabled} {...field}>
              <InputOtpGroup>
                <InputOtpSlot index={0} />
                <InputOtpSlot index={1} />
                <InputOtpSlot index={2} />
              </InputOtpGroup>
              {!isMobile && <InputOtpSeparator />}
              <InputOtpGroup>
                <InputOtpSlot index={3} />
                <InputOtpSlot index={4} />
                <InputOtpSlot index={5} />
              </InputOtpGroup>
              {!isMobile && <InputOtpSeparator />}
              <InputOtpGroup>
                <InputOtpSlot index={6} />
                <InputOtpSlot index={7} />
                <InputOtpSlot index={8} />
                <InputOtpSlot index={9} />
              </InputOtpGroup>
            </InputOtp>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
