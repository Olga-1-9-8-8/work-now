import { SeoMetadata } from "../../../shared/navigation";
import { ResumeCreation } from "../components/ResumeCreation";

const ResumeCreationPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Создание резюме"
        description="Цель WorkNow— помочь вам создать профессиональное и привлекательное резюме, которое откроет двери к новым карьерным возможностям."
      />
      <ResumeCreation />;
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumeCreationPage;
