import { useCallback } from "react";
import { UseFormReset } from "react-hook-form";
import { FormInputField } from "../../../../ui/form-control";
import { SignUpFormType } from "../../types/SignUpFormType";
import { authSignUpFormValidationSchema } from "../../validation/authSignUpFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthPasswordField } from "./item/AuthPasswordField";
import { AuthPhoneField } from "./item/AuthPhoneField";

export const AuthSignUpForm = () => {
  const onSubmit = useCallback((data: SignUpFormType, reset: UseFormReset<SignUpFormType>) => {
    reset();
    console.log(data);
  }, []);

  return (
    <AuthFormWrapper<SignUpFormType>
      title="Зарегистрироваться"
      schema={authSignUpFormValidationSchema}
      onSubmit={onSubmit}
    >
      <FormInputField<SignUpFormType> label="Укажите имя" name="userName" placeholder="Имя" />
      <FormInputField<SignUpFormType> label="Укажите email" name="email" placeholder="Email" />
      <AuthPasswordField<SignUpFormType>
        label="Укажите пароль"
        name="password"
        placeholder="Введите пароль"
      />
      <AuthPasswordField<SignUpFormType>
        label="Подтвердите пароль"
        name="confirmPassword"
        placeholder="Подтвердите введенный пароль"
      />
      <AuthPhoneField<SignUpFormType> label="Укажите номер телефона" name="phone" />
    </AuthFormWrapper>
  );
};
