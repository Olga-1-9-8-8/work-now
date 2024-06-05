import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { FormInputField, FormInputFieldProps } from "../../../../../ui/form-control";

export const AuthPasswordField = <T extends FieldValues>({
  label,
  name,
  ...props
}: FormInputFieldProps<T>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClick = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <FormInputField
      type={isPasswordVisible ? "text" : "password"}
      iconAfter={
        isPasswordVisible ? <Eye onClick={handleClick} /> : <EyeOff onClick={handleClick} />
      }
      label={label}
      name={name}
      {...props}
    />
  );
};
