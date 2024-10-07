import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkApplications } from "../components/LkApplications";

export const LkApplicationsPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkApplicationsPage.title")}
        description={t("seo.lkApplicationsPage.description")}
      />
      <LkApplications />
    </>
  );
};
