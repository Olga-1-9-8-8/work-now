import { CardDescription, CardTitle } from "../../../ui/card/Card";
import { AuthUpdatePasswordForm } from "../components/form/AuthUpdatePasswordForm";

const AuthUpdatePasswordPage = () => {
  return (
    <>
      <CardTitle>
        Введите новый пароль и подтвердите его?
        <CardDescription>Напишите свой новый пароль</CardDescription>
      </CardTitle>

      <AuthUpdatePasswordForm />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthUpdatePasswordPage;
