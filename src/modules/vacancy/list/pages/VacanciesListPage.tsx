import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { TypographyH5 } from "../../../shared/ui/typography/TypographyH5";
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
    <div className="p-4">
      {vacancies ? (
        <VacanciesList vacancies={vacancies} />
      ) : (
        <TypographyH5 className="text-center">Вакансии не найдены</TypographyH5>
      )}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacanciesListPage;
