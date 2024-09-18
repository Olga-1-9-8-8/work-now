import { SeoMetadata } from "../../../shared/navigation";
import { VacancyCreation } from "../components/VacancyCreation";

const VacancyCreationPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Создание вакансии"
        description="Цель WorkNow — помочь вам создать профессиональную и привлекательную вакансию, которая откроет двери к новым возможностям и качественно расширит ваш штат сотрудников."
      />
      ;
      <VacancyCreation />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacancyCreationPage;
