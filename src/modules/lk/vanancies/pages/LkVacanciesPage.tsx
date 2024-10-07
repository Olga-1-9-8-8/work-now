import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkVacancies } from "../components/LkVacancies";

export const LkVacanciesPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkVacanciesPage.title")}
        description={t("seo.lkVacanciesPage.description")}
      />
      <LkVacancies />
    </>
  );
};
