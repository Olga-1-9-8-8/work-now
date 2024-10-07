import { SeoMetadata } from "../../../navigation";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { AuthReset } from "../components/AuthReset";

const AuthResetPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.authResetPage.title")}
        description={t("seo.authResetPage.description")}
      />
      <AuthReset />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthResetPage;
