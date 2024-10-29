import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkApplications } from "../components/LkApplications";

const LkApplicationsPage = () => {
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

// eslint-disable-next-line import/no-default-export
export default LkApplicationsPage;
