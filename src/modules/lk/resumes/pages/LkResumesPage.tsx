import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkResumes } from "../components/LkResumes";

const LkResumesPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkResumesPage.title")}
        description={t("seo.lkResumesPage.description")}
      />
      <LkResumes />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default LkResumesPage;
