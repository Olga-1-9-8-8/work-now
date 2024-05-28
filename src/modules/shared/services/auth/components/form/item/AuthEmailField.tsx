import { FieldValues } from "react-hook-form";
import { FormInputField, FormInputFieldProps } from "../../../../../ui/form-control";

export const AuthEmailField = <T extends FieldValues>({
  label,
  name,
  ...props
}: FormInputFieldProps<T>) => {
  return <FormInputField autoComplete="email" label={label} name={name} {...props} />;
};
