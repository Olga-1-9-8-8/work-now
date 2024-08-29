import { SearchList } from "../../../shared/components/search-list";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { VacanciesList } from "../components/VacanciesList";
import { useVacancies } from "../hooks/useVacancies";

const VacanciesListPage = () => {
  const { isLoading, vacancies, totalCount } = useVacancies();

  return (
    <SearchList total={totalCount} isLoading={isLoading} isHiring>
      {isLoading ? <Spinner /> : <VacanciesList vacancies={vacancies} totalCount={totalCount} />}
    </SearchList>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacanciesListPage;
