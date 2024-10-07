import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkResumes } from "../components/LkResumes";

export const LkResumesPage = () => {
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
