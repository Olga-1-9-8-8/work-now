import { useNavigate } from "react-router-dom";
import { CreateButton } from "../../../shared/components/buttons";
import { SearchList } from "../../../shared/components/search-list";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { VacanciesList } from "../components/VacanciesList";
import { useVacancies } from "../hooks/useVacancies";

const VacanciesListPage = () => {
  const { isLoading, vacancies, totalCount } = useVacancies();
  const navigate = useNavigate();

  return (
    <SearchList
      total={totalCount}
      title="вакансии"
      button={
        <CreateButton title="Создать новое резюме" onClick={() => navigate(`/resumes/creation`)} />
      }
    >
      {isLoading ? <Spinner /> : <VacanciesList vacancies={vacancies} totalCount={totalCount} />}
    </SearchList>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacanciesListPage;
