import { Link } from "react-router-dom";
import { SearchFiltersBar } from "../../../shared/components/filters";
import { SideBar } from "../../../shared/components/side-bar";
import { Button } from "../../../shared/ui/buttons/Button";
import { PageContainer } from "../../../shared/ui/layout/components/containers/PageContainer";

export const VacanciesSearchLayout = () => {
  // TODO: получить при фильтрации
  const city = "Москва";
  const position = "Секретари";
  const total = 3200;

  return (
    <PageContainer>
      <div className="flex flex-col gap-6 border-b-2 border-primary py-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">
            {position} в {city}, найдено {total} вакансий
          </h2>
          <Button asChild>
            <Link to="resumes/creation">Создать новое резюме</Link>
          </Button>
        </div>
        <SearchFiltersBar />
      </div>
      <SideBar />
    </PageContainer>
  );
};
