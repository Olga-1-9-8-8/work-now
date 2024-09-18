import { useLocation } from "react-router-dom";
import { Tabs } from "../../../components/tabs";
import { AuthLoginForm } from "./form/AuthLoginForm";
import { AuthSignUpForm } from "./form/AuthSignUpForm";

export const Auth = () => {
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
