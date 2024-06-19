import { useCallback } from "react";
import { UseFormReset } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../../ui/buttons/Button";
import { useLogin } from "../../hooks/useLogin";
import { LogInFormType } from "../../types/LogInFormType";
import { authLogInFormValidationSchema } from "../../validation/authLogInFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthEmailField } from "./item/AuthEmailField";
import { AuthPasswordField } from "./item/AuthPasswordField";

export const AuthLoginForm = () => {
  const navigate = useNavigate();

  const { isLoginPending, login } = useLogin();

  const onSubmit = useCallback(
    (data: LogInFormType, reset: UseFormReset<LogInFormType>) => {
      login(data, { onSettled: () => reset() });
    },
    [login],
  );

  return (
    <AuthFormWrapper<LogInFormType>
      title="Войти в аккаунт"
      schema={authLogInFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isLoginPending}
    >
      <AuthEmailField<LogInFormType>
        label="Укажите email"
        name="email"
        placeholder="Email"
        disabled={isLoginPending}
      />
      <AuthPasswordField<LogInFormType>
        label="Укажите пароль"
        placeholder="Введите пароль"
        name="password"
        disabled={isLoginPending}
      />
      <Button
        onClick={() => navigate("reset")}
        variant="link"
        className="flex w-full justify-end p-0 text-primary"
      >
        Забыли пароль?
      </Button>
    </AuthFormWrapper>
  );
};
