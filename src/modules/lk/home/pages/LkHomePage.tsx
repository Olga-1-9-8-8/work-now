import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkHome } from "../components/LkHome";

const LkHomePage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkHomePage.title")}
        description={t("seo.lkHomePage.description")}
      />
      <LkHome />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default LkHomePage;
