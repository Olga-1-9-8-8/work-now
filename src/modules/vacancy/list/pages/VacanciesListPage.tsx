import { SearchList } from "../../../shared/components/search-list";
import { SeoMetadata } from "../../../shared/navigation";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { VacanciesList } from "../components/VacanciesList";
import { useVacancies } from "../hooks/useVacancies";

const VacanciesListPage = () => {
  const { t } = useLanguageSwitcher("seo");
  const { isLoading, vacancies, totalCount } = useVacancies();

  return (
    <>
      <SeoMetadata
        title={t("seo.vacanciesListPage.title")}
        description={t("seo.vacanciesListPage.description")}
      />
      <SearchList total={totalCount} isLoading={isLoading} isHiring>
        {isLoading ? <Spinner /> : <VacanciesList vacancies={vacancies} totalCount={totalCount} />}
      </SearchList>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacanciesListPage;
