import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../../shared/components/pagination";
import { UniversalJobType } from "../../../shared/types";
import { Button } from "../../../shared/ui/buttons/Button";
import { TypographyH2 } from "../../../shared/ui/typography/TypographyH2";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkVacanciesCard } from "./card/LkVacanciesCard";

interface LkVacanciesListProps {
  vacancies: UniversalJobType[];
  totalCount: number;
}

export const LkVacanciesList = ({ vacancies, totalCount }: LkVacanciesListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguageSwitcher("lk");
  return (
    <div className="py-6">
      <div className="flex flex-col md:gap-6">
        <div>
          <TypographyH2>{t("lk.vacancies.title")}</TypographyH2>

          <div className=" flex flex-col gap-8 md:flex-row md:items-baseline">
            <p className="pt-2 text-lg text-muted-foreground">
              {t("lk.vacancies.list.title")}{" "}
              <strong className="text-primary-extraDark">
                {t("lk.vacancies.list.description", { count: totalCount })}
              </strong>
            </p>
            <Button
              onClick={() =>
                navigate("/vacancies/creation", {
                  state: {
                    from: location.pathname,
                    title: t("lk.vacancies.backButtonTitle"),
                  },
                })
              }
              variant="success"
              size="sm"
            >
              + {t("lk.vacancies.createButtonTitle")}
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
