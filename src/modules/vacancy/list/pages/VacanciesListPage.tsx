import { SearchList } from "../../../shared/components/search-list";
import { SeoMetadata } from "../../../shared/navigation";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { VacanciesList } from "../components/VacanciesList";
import { useVacancies } from "../hooks/useVacancies";

const VacanciesListPage = () => {
  const { isLoading, vacancies, totalCount } = useVacancies();

  return (
    <>
      <SeoMetadata
        title="WorkNow / Список Вакансий"
        description="На сайте WorkNow вы найдете обширный список вакансий, подходящие для различных сфер деятельности и уровней квалификации. Наша цель — помочь вам найти идеальную работу"
      />
      <SearchList total={totalCount} isLoading={isLoading} isHiring>
        {isLoading ? <Spinner /> : <VacanciesList vacancies={vacancies} totalCount={totalCount} />}
      </SearchList>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacanciesListPage;
