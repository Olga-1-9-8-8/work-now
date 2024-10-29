import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { VacancyCreation } from "../components/VacancyCreation";

const VacancyCreationPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.vacancyCreationPage.title")}
        description={t("seo.vacancyCreationPage.description")}
      />
      <VacancyCreation />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacancyCreationPage;
