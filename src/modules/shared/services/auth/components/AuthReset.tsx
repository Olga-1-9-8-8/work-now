import { CardDescription, CardTitle } from "../../../ui/card/Card";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { AuthResetPasswordForm } from "./form/AuthResetPasswordForm";

export const AuthReset = () => {
  const { t } = useLanguageSwitcher("login");

  return (
    <>
      <CardTitle>
        {t("login.login.form.forgotPassword")}
        <CardDescription className="pt-1 font-medium">
          {t("login.login.reset.description")}
        </CardDescription>
      </CardTitle>

      <AuthResetPasswordForm />
    </>
  );
};
