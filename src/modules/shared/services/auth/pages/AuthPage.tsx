import { SeoMetadata } from "../../../navigation";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { Auth } from "../components/Auth";

const AuthPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata title={t("seo.authPage.title")} description={t("seo.authPage.description")} />
      <Auth />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthPage;
