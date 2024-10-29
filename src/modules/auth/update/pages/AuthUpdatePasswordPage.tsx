import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
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
