import { CardDescription, CardTitle } from "../../../ui/card/Card";
import { AuthUpdatePasswordForm } from "./form/AuthUpdatePasswordForm";

export const AuthUpdatePassword = () => {
  return (
    <>
      <CardTitle>
        Введите новый пароль
        <CardDescription>Напишите свой новый пароль для входа в аккаунт</CardDescription>
      </CardTitle>

      <AuthUpdatePasswordForm />
    </>
  );
};
