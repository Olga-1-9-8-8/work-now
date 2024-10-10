import { useCallback, useState } from "react";
import { UseFormReset } from "react-hook-form";
import { LanguageType } from "../../../../configs";
import { TypographyH6 } from "../../../../ui/typography/TypographyH6";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useResetPassword } from "../../hooks/useResetPassword";
import { ResetPasswordFormType } from "../../types/form/ResetPasswordFormType";
import { getAuthResetPasswordFormValidationSchema } from "../../validation/getAuthResetPasswordFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthEmailField } from "./item/AuthEmailField";

export const AuthResetPasswordForm = () => {
  const { isResetPasswordPending, resetPassword } = useResetPassword();
  const { t, language } = useLanguageSwitcher("login");
  const [isSendMail, setIsSendMail] = useState(false);

  const authResetPasswordFormValidationSchema = getAuthResetPasswordFormValidationSchema(
    language as LanguageType,
  );

  const onSubmit = useCallback(
    (data: ResetPasswordFormType, reset: UseFormReset<ResetPasswordFormType>) => {
      resetPassword(data, { onSuccess: () => setIsSendMail(true), onSettled: () => reset() });
    },
    [resetPassword],
  );

  if (isSendMail) {
    return (
      <div className="flex flex-col gap-4">
        <TypographyH6 className="text-success">{t("login.login.reset.description")}</TypographyH6>
      </div>
    );
  }

  return (
    <AuthFormWrapper<ResetPasswordFormType>
      title={t("login.login.reset.title")}
      schema={authResetPasswordFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isResetPasswordPending}
    >
      <AuthEmailField<ResetPasswordFormType>
        label={t("login.login.form.email.label")}
        name="email"
        placeholder="Email"
        disabled={isResetPasswordPending}
      />
    </AuthFormWrapper>
  );
};
