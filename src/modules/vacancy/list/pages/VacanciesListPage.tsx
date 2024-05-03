import { useQuery } from "@tanstack/react-query";
import { NotFound } from "../../../shared/components/not-found/components";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { getVacancies } from "../api/apiVacancies";
import { VacanciesList } from "../components/VacanciesList";

const VacanciesListPage = () => {
  const { isLoading, data: vacancies } = useQuery({
    queryKey: ["vacancies"],
    queryFn: getVacancies,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="py-4">
      {vacancies ? (
        <VacanciesList vacancies={vacancies} />
      ) : (
        <NotFound title="Вакансии" description="Поменяйте фильтры или попробуйте еще раз" />
      )}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacanciesListPage;
