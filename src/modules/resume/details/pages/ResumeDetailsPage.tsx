import { SeoMetadata } from "../../../shared/navigation";
import { ResumeDetails } from "../components/ResumeDetails";

export const ResumeDetailsPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Детали Резюме"
        description="На сайте WorkNow представлены детализированные резюме кандидатов, которые помогут вам найти идеального специалиста для вашей команды"
      />
      <ResumeDetails />;
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ResumeDetailsPage;
