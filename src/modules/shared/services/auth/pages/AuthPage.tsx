import { useLocation } from "react-router-dom";
import { Tabs } from "../../../components/tabs";
import { AuthLoginForm } from "../components/form/AuthLoginForm";
import { AuthSignUpForm } from "../components/form/AuthSignUpForm";

const AuthPage = () => {
  const { state } = useLocation();

  return (
    <Tabs
      tabs={[
        {
          value: "login",
          title: "Войти в Личный кабинет",
          content: <AuthLoginForm />,
        },
        { value: "singUp", title: "Зарегистрироваться", content: <AuthSignUpForm /> },
      ]}
      defaultValue={state?.tab ?? "login"}
      isFullWidth
    />
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthPage;
