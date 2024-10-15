import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkDetails } from "../components/LkDetails";

export const LkDetailsPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkDetailsPage.title")}
        description={t("seo.lkDetailsPage.description")}
      />
      <LkDetails />
    </>
  );
};
