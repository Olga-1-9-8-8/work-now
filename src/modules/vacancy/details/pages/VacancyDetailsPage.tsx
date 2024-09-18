import { SeoMetadata } from "../../../shared/navigation";
import { VacancyDetails } from "../components/VacancyDetails";

const VacancyDetailsPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Детали Вакансии"
        description="На сайте WorkNow представлены детализированные вакансии, которые помогут вам найти идеальную работу"
      />
      <VacancyDetails />;
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacancyDetailsPage;
