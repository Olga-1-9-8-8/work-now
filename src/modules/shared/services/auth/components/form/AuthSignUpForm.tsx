import { useCallback, useState } from "react";
import { UseFormReset } from "react-hook-form";
import { FormInputField } from "../../../../ui/form-control";
import { FormCheckboxField } from "../../../../ui/form-control/checkbox/FormCheckboxField";
import { TypographyH5 } from "../../../../ui/typography/TypographyH5";
import { useSignUp } from "../../hooks/useSignUp";
import { SignUpFormType } from "../../types/form/SignUpFormType";
import { authSignUpFormValidationSchema } from "../../validation/authSignUpFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthPasswordField } from "./item/AuthPasswordField";
import { AuthPhoneField } from "./item/AuthPhoneField";

export const AuthSignUpForm = () => {
  const { isSignUpPending, signUp } = useSignUp();

  const [isPassedConfirmation, setIsPassedConfirmation] = useState(false);

  const onSubmit = useCallback(
    (data: SignUpFormType, reset: UseFormReset<SignUpFormType>) => {
      signUp(data, {
        onSuccess: () => {
          setIsPassedConfirmation(true);
          reset();
        },
      });
    },
    [signUp],
  );
  if (isPassedConfirmation) {
    return (
      <div className="flex flex-col gap-4">
        <TypographyH5>На вашу почту выслано подтверждение регистрации.</TypographyH5>
        <p className="text-muted-foreground">
          Подтвердить свой адрес электронной почты перед первым входом в свой аккаунт.
        </p>
      </div>
    );
  }

  return (
    <AuthFormWrapper<SignUpFormType>
      title="Зарегистрироваться"
      schema={authSignUpFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isSignUpPending}
    >
      <FormInputField<SignUpFormType>
        label="Укажите имя / или название компании"
        name="username"
        placeholder="Имя"
        disabled={isSignUpPending}
      />
      <FormInputField<SignUpFormType>
        label="Укажите email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        disabled={isSignUpPending}
      />
      <AuthPasswordField<SignUpFormType>
        label="Укажите пароль"
        name="password"
        placeholder="Введите пароль"
        disabled={isSignUpPending}
      />
      <AuthPasswordField<SignUpFormType>
        label="Подтвердите пароль"
        name="confirmPassword"
        placeholder="Подтвердите введенный пароль"
        disabled={isSignUpPending}
      />
      <AuthPhoneField<SignUpFormType>
        label="Укажите номер телефона"
        name="phone"
        disabled={isSignUpPending}
      />
      <FormCheckboxField<SignUpFormType>
        label="Вы будете нанимать? (Нажмите, если вы компания)"
        name="isCompany"
        disabled={isSignUpPending}
      />
    </AuthFormWrapper>
  );
};
