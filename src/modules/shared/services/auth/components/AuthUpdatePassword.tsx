import { CardDescription, CardTitle } from "../../../ui/card/Card";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { AuthUpdatePasswordForm } from "./form/AuthUpdatePasswordForm";

export const AuthUpdatePassword = () => {
  const { t } = useLanguageSwitcher("login");
  return (
    <>
      <CardTitle>
        {t("login.login.update.header")}
        <CardDescription> {t("login.login.update.description")}</CardDescription>
      </CardTitle>

      <AuthUpdatePasswordForm />
    </>
  );
};
