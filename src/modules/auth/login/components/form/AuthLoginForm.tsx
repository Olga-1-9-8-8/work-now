import { useCallback } from "react";
import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LanguageType } from "../../../../shared/configs";
import { Button } from "../../../../shared/ui/buttons/Button";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher";
import { AuthFormWrapper } from "../../../shared/components/AuthFormWrapper";
import { AuthEmailField } from "../../../shared/components/items/AuthEmailField";
import { AuthPasswordField } from "../../../shared/components/items/AuthPasswordField";
import { useLogin } from "../../hooks/useLogin";
import { LogInFormType } from "../../types/LogInFormType";
import { getAuthLogInFormValidationSchema } from "../../validation/getAuthLogInFormValidationSchema";

export const AuthLoginForm = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguageSwitcher("login");

  const authLogInFormValidationSchema = getAuthLogInFormValidationSchema(language as LanguageType);

  const { isLoginPending, login } = useLogin();

  const onSubmit = useCallback(
    (data: LogInFormType, reset: UseFormReset<LogInFormType>) => {
      login(data, { onSettled: () => reset() });
    },
    [login],
  );

  return (
    <AuthFormWrapper<LogInFormType>
      title={t("login.login.form.title")}
      schema={authLogInFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isLoginPending}
    >
      <AuthEmailField<LogInFormType>
        label={t("login.login.form.email.label")}
        name="email"
        placeholder="Email"
        disabled={isLoginPending}
      />
      <AuthPasswordField<LogInFormType>
        label={t("login.login.form.password.label")}
        placeholder={t("login.login.form.password.placeholder")}
        name="password"
        disabled={isLoginPending}
      />
      <Button
        onClick={() => navigate("reset")}
        type="button"
        variant="link"
        className="flex w-full justify-end p-0 text-primary"
      >
        {t("login.login.form.forgotPassword")}
      </Button>
    </AuthFormWrapper>
  );
};
