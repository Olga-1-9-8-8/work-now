import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkHome } from "../components/LkHome";

export const LkHomePage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkHomePage.title")}
        description={t("seo.lkHomePage.description")}
      />
      <LkHome />;
    </>
  );
};
