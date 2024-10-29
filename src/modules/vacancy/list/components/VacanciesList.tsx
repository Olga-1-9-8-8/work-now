import { NotFound } from "../../../shared/components/not-found";
import { Pagination } from "../../../shared/components/pagination/components/Pagination";
import { UniversalCardItemType } from "../../../shared/types";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { VacanciesListItem } from "./item/VacanciesListItem";

interface VacanciesListProps {
  vacancies?: UniversalCardItemType[];
  totalCount?: number;
}

export const VacanciesList = ({ vacancies, totalCount }: VacanciesListProps) => {
  const { t } = useLanguageSwitcher("vacancy");
  if (!vacancies) return <NotFound title={t("vacancy.list.notFound")} />;

  return (
    <div className="flex flex-col gap-3">
      {totalCount === 0 ? (
        <NotFound
          title={t("vacancy.list.notFound")}
          description={t("vacancy.list.notFoundDescription")}
        />
      ) : (
        vacancies.map((vacancy) => {
          return <VacanciesListItem key={vacancy.id} vacancy={vacancy} />;
        })
      )}
      {!!totalCount && <Pagination totalCount={totalCount} />}
    </div>
  );
};
