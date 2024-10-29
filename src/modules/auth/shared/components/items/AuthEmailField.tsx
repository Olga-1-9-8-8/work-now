import { FieldValues } from "react-hook-form";
import { FormInputField, FormInputFieldProps } from "../../../../shared/ui/form-control";

export const AuthEmailField = <T extends FieldValues>({
  label,
  name,
  ...props
}: FormInputFieldProps<T>) => {
  return (
    <FormInputField<T> autoComplete="email" label={label} name={name} type="email" {...props} />
  );
};
