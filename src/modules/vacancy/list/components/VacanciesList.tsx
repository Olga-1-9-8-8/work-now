import { NotFound } from "../../../shared/components/not-found";
import { Pagination } from "../../../shared/components/pagination/components/Pagination";
import { UniversalCardItemType } from "../../../shared/types";
import { VacanciesListItem } from "./item/VacanciesListItem";

interface VacanciesListProps {
  vacancies?: UniversalCardItemType[];
  totalCount?: number;
}

export const VacanciesList = ({ vacancies, totalCount }: VacanciesListProps) => {
  if (!vacancies) return <NotFound title="Вакансии" />;

  return (
    <div className="flex flex-col gap-3">
      {totalCount === 0 ? (
        <NotFound title="Вакансии" description="Поменяйте фильтры или попробуйте еще раз" />
      ) : (
        vacancies.map((vacancy) => {
          return <VacanciesListItem key={vacancy.id} vacancy={vacancy} />;
        })
      )}
      {!!totalCount && <Pagination totalCount={totalCount} />}
    </div>
  );
};
