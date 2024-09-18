import { SeoMetadata } from "../../../shared/navigation";
import { LkVacancies } from "../components/LkVacancies";

export const LkVacanciesPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Мои Вакансии"
        description=" На странице моих вакансий WorkNow вы можете легко управлять всеми вашими вакансиями в одном месте"
      />
      <LkVacancies />
    </>
  );
};
