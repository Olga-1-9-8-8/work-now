import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { ResumeCreation } from "../components/ResumeCreation";

const ResumeCreationPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.resumeCreationPage.title")}
        description={t("seo.resumeCreationPage.description")}
      />
      <ResumeCreation />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumeCreationPage;
