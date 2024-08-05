import { useNavigate } from "react-router-dom";
import { Pagination } from "../../../shared/components/pagination";
import { UniversalJobType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import { TypographyH2 } from "../../../shared/ui/typography/TypographyH2";
import { LkVacanciesCard } from "./card/LkVacanciesCard";

interface LkVacanciesProps {
  vacancies: UniversalJobType[];
  totalCount: number;
}

export const LkVacancies = ({ vacancies, totalCount }: LkVacanciesProps) => {
  const navigate = useNavigate();

  return (
    <div className="py-6">
      <div className="flex flex-col md:gap-6">
        <div>
          <TypographyH2>Мои вакансии</TypographyH2>

          <div className=" flex flex-col gap-8 md:flex-row md:items-baseline">
            <p className="pt-2 text-lg text-muted-foreground">
              Вы заполнили <strong>{totalCount}</strong> вакансий
            </p>
            <Button onClick={() => navigate("/vacancies/creation")} variant="success" size="sm">
              + Создайте еще вакансию
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 sm:py-4">
          {vacancies.map((vacancy) => (
            <LkVacanciesCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>
      </div>
      <Pagination totalCount={totalCount} />
    </div>
  );
};
