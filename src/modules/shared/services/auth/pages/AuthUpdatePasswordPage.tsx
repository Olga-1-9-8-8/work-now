import { SeoMetadata } from "../../../navigation";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { AuthUpdatePassword } from "../components/AuthUpdatePassword";

const AuthUpdatePasswordPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.authUpdatePasswordPage.title")}
        description={t("seo.authUpdatePasswordPage.description")}
      />
      <AuthUpdatePassword />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthUpdatePasswordPage;
