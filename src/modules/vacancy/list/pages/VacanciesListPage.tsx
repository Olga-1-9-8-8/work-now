import { useNavigate } from "react-router-dom";
import { CreateButton } from "../../../shared/components/buttons";
import { NotFound } from "../../../shared/components/not-found";
import { SearchList } from "../../../shared/components/search-list";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { VacanciesList } from "../components/VacanciesList";
import { useVacancies } from "../hooks/useVacancies";

const VacanciesListPage = () => {
  const { isLoading, vacancies, totalCount } = useVacancies();
  const navigate = useNavigate();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SearchList
      total={totalCount}
      title="вакансии"
      button={<CreateButton title="новое резюме" onClick={() => navigate(`/resumes/creation`)} />}
    >
      {vacancies ? (
        <VacanciesList vacancies={vacancies} totalCount={totalCount} />
      ) : (
        <NotFound title="Вакансии" />
      )}
    </SearchList>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacanciesListPage;
