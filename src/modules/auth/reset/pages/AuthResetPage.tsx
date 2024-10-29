import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
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
