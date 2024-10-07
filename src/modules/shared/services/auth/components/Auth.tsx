import { useLocation } from "react-router-dom";
import { Tabs } from "../../../components/tabs";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { AuthLoginForm } from "./form/AuthLoginForm";
import { AuthSignUpForm } from "./form/AuthSignUpForm";

export const Auth = () => {
  const { state } = useLocation();

  const { t } = useLanguageSwitcher("login");
  return (
    <Tabs
      tabs={[
        {
          value: "login",
          title: t("login.login.title"),
          content: <AuthLoginForm />,
        },
        { value: "singUp", title: t("login.singUp.title"), content: <AuthSignUpForm /> },
      ]}
      defaultValue={state?.tab ?? "login"}
      isFullWidth
    />
  );
};
