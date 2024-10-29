import { useCallback, useState } from "react";
import { UseFormReset } from "react-hook-form";
import { LanguageType } from "../../../../shared/configs";
import { FormInputField } from "../../../../shared/ui/form-control";
import { FormCheckboxField } from "../../../../shared/ui/form-control/checkbox/FormCheckboxField";
import { TypographyH5 } from "../../../../shared/ui/typography/TypographyH5";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher";
import { AuthFormWrapper } from "../../../shared/components/AuthFormWrapper";
import { AuthPasswordField } from "../../../shared/components/items/AuthPasswordField";
import { AuthPhoneField } from "../../../shared/components/items/AuthPhoneField";
import { useSignUp } from "../../hooks/useSignUp";
import { SignUpFormType } from "../../types/SignUpFormType";
import { getAuthSignUpFormValidationSchema } from "../../validation/getAuthSignUpFormValidationSchema";

export const AuthSignUpForm = () => {
  const { isSignUpPending, signUp } = useSignUp();

  const [isPassedConfirmation, setIsPassedConfirmation] = useState(false);

  const { t, language } = useLanguageSwitcher("login");

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
      schema={getAuthSignUpFormValidationSchema(language as LanguageType)}
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
