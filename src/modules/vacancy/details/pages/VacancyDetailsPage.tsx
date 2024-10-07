import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { VacancyDetails } from "../components/VacancyDetails";

const VacancyDetailsPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.vacancyDetailsPage.title")}
        description={t("seo.vacancyDetailsPage.description")}
      />
      <VacancyDetails />;
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacancyDetailsPage;
