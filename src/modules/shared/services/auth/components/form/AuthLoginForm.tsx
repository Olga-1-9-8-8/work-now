import { useCallback } from "react";
import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../ui/buttons/Button";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useLogin } from "../../hooks/useLogin";
import { LogInFormType } from "../../types/form/LogInFormType";
import { authLogInFormValidationSchema } from "../../validation/authLogInFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthEmailField } from "./item/AuthEmailField";
import { AuthPasswordField } from "./item/AuthPasswordField";

export const AuthLoginForm = () => {
  const navigate = useNavigate();
  const { t } = useLanguageSwitcher("login");

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
