import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { ResumeDetails } from "../components/ResumeDetails";

export const ResumeDetailsPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.resumeDetailsPage.title")}
        description={t("seo.resumeDetailsPage.description")}
      />
      <ResumeDetails />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumeDetailsPage;
