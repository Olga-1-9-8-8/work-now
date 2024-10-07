import { useCallback, useState } from "react";
import { UseFormReset } from "react-hook-form";
import { FormInputField } from "../../../../ui/form-control";
import { FormCheckboxField } from "../../../../ui/form-control/checkbox/FormCheckboxField";
import { TypographyH5 } from "../../../../ui/typography/TypographyH5";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useSignUp } from "../../hooks/useSignUp";
import { SignUpFormType } from "../../types/form/SignUpFormType";
import { authSignUpFormValidationSchema } from "../../validation/authSignUpFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthPasswordField } from "./item/AuthPasswordField";
import { AuthPhoneField } from "./item/AuthPhoneField";

export const AuthSignUpForm = () => {
  const { isSignUpPending, signUp } = useSignUp();

  const [isPassedConfirmation, setIsPassedConfirmation] = useState(false);

  const { t } = useLanguageSwitcher("login");

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
        <TypographyH5>{t("login.singUp.confirmed.title")}</TypographyH5>
        <p className="text-muted-foreground">{t("login.singUp.confirmed.description")}</p>
      </div>
    );
  }

  return (
    <AuthFormWrapper<SignUpFormType>
      title={t("login.singUp.title")}
      schema={authSignUpFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isSignUpPending}
    >
      <FormInputField<SignUpFormType>
        label={t("login.singUp.form.username.label")}
        name="username"
        placeholder={t("login.singUp.form.username.placeholder")}
        disabled={isSignUpPending}
      />
      <FormInputField<SignUpFormType>
        label={t("login.singUp.form.email.label")}
        name="email"
        placeholder="Email"
        autoComplete="email"
        disabled={isSignUpPending}
      />
      <AuthPasswordField<SignUpFormType>
        label={t("login.singUp.form.password.label")}
        name="password"
        placeholder={t("login.singUp.form.password.placeholder")}
        disabled={isSignUpPending}
      />
      <AuthPasswordField<SignUpFormType>
        label={t("login.singUp.form.confirmPassword.label")}
        name="confirmPassword"
        placeholder={t("login.singUp.form.confirmPassword.placeholder")}
        disabled={isSignUpPending}
      />
      <AuthPhoneField<SignUpFormType>
        label={t("login.singUp.form.phone.label")}
        name="phone"
        disabled={isSignUpPending}
      />
      <FormCheckboxField<SignUpFormType>
        label={t("login.singUp.form.isCompany.label")}
        name="isCompany"
        disabled={isSignUpPending}
      />
    </AuthFormWrapper>
  );
};
