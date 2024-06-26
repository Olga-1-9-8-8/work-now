import { Pagination } from "../../../shared/components/pagination";
import { TypographyH2 } from "../../../shared/ui/typography/TypographyH2";
import { VacancyItemType } from "../../../vacancy/shared/types/VacancyItemType";
import { useDeleteVacancy } from "../hooks";
import { LkVacanciesCard } from "./card/LkVacanciesCard";

interface LkVacanciesProps {
  vacancies: VacancyItemType[];
  totalCount: number;
}

export const LkVacancies = ({ vacancies, totalCount }: LkVacanciesProps) => {
  const { deleteVacancy, isDeletingVacancy } = useDeleteVacancy();

  return (
    <>
      <div className="flex flex-col md:gap-6">
        <div>
          <TypographyH2>Мои вакансии</TypographyH2>
          <p className="pt-2 text-lg text-muted-foreground">
            У Вас заполнено <strong>{totalCount}</strong> вакансий
          </p>
        </div>

        <div className="flex flex-col gap-4 py-8 sm:py-4">
          {vacancies.map((resume, index: number) => (
            <LkVacanciesCard
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              resume={resume}
              onDelete={deleteVacancy}
              isDeleting={isDeletingVacancy}
            />
          ))}
        </div>
      </div>
      <Pagination totalCount={totalCount} />
    </>
  );
};
