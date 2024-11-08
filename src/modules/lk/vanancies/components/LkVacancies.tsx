import { useNavigate } from "react-router-dom";
import { NotExist, NotFound } from "../../../shared/components/not-found";
import { Button } from "../../../shared/ui/buttons/Button";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { useProfileVacancies } from "../../shared/hooks/useProfileVacancies";
import { LkVacanciesList } from "./LkVacanciesList";

export const LkVacancies = () => {
  const navigate = useNavigate();
  const { profileVacancies, isProfileVacanciesLoading, totalProfileVacanciesCount } =
    useProfileVacancies();

  const { t } = useLanguageSwitcher("lk");

  if (isProfileVacanciesLoading) {
    return <Spinner />;
  }

  if (!profileVacancies) {
    return <NotFound title={t("lk.vacancies.notFoundTitle")} />;
  }

  return totalProfileVacanciesCount ? (
    <LkVacanciesList vacancies={profileVacancies} totalCount={totalProfileVacanciesCount} />
  ) : (
    <NotExist
      title={
        <div className="flex flex-col items-center gap-4">
          <span>{t("lk.vacancies.notExist.title")}</span>
          <Button onClick={() => navigate("/vacancies/creation")} variant="success" size="sm">
            {t("lk.vacancies.buttonTitle")}
          </Button>
        </div>
      }
    />
  );
};
