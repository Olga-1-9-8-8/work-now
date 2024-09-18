import { useNavigate } from "react-router-dom";
import { NotExist, NotFound } from "../../../shared/components/not-found";
import { Button } from "../../../shared/ui/buttons/Button";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useProfileVacancies } from "../../shared/hooks/useProfileVacancies";
import { LkVacanciesList } from "./LkVacanciesList";

export const LkVacancies = () => {
  const navigate = useNavigate();
  const { profileVacancies, isProfileVacanciesLoading, totalProfileVacanciesCount } =
    useProfileVacancies();

  if (isProfileVacanciesLoading) {
    return <Spinner />;
  }

  if (!profileVacancies) {
    return <NotFound title="Резюме" />;
  }

  return totalProfileVacanciesCount ? (
    <LkVacanciesList vacancies={profileVacancies} totalCount={totalProfileVacanciesCount} />
  ) : (
    <NotExist
      title={
        <div className="flex items-center gap-4">
          <span>У вас пока нет вакансий.</span>
          <Button onClick={() => navigate("/vacancies/creation")} variant="success" size="sm">
            Создайте вакансию
          </Button>
        </div>
      }
    />
  );
};
