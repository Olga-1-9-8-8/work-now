import { CardDescription, CardTitle } from "../../../ui/card/Card";
import { AuthResetPasswordForm } from "../components/form/AuthResetPasswordForm";

const AuthResetPage = () => {
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

// eslint-disable-next-line import/no-default-export
export default AuthResetPage;
