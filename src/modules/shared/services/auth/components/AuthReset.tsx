import { CardDescription, CardTitle } from "../../../ui/card/Card";
import { AuthResetPasswordForm } from "./form/AuthResetPasswordForm";

export const AuthReset = () => {
  return (
    <>
      <CardTitle>
        Забыли пароль?
        <CardDescription>
          Напишите свою почту и мы вышлем на неё ссылку для восстановления пароля
        </CardDescription>
      </CardTitle>

      <AuthResetPasswordForm />
    </>
  );
};
