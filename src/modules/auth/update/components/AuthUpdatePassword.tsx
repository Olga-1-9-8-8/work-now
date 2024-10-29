import { CardDescription, CardTitle } from "../../../shared/ui/card/Card";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
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
