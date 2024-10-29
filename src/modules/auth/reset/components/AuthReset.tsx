import { CardDescription, CardTitle } from "../../../shared/ui/card/Card";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
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
