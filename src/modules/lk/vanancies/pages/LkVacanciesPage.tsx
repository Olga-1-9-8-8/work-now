import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkVacancies } from "../components/LkVacancies";

const LkVacanciesPage = () => {
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

// eslint-disable-next-line import/no-default-export
export default LkVacanciesPage;
