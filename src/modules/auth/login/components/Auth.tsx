import { useLocation } from "react-router-dom";
import { Tabs } from "../../../shared/components/tabs";
import { useResponsiveContext } from "../../../shared/responsive";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { AuthLoginForm } from "./form/AuthLoginForm";
import { AuthSignUpForm } from "./form/AuthSignUpForm";

export const Auth = () => {
  const { state } = useLocation();
  const isMobile = useResponsiveContext();

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
      isShort={isMobile}
    />
  );
};
