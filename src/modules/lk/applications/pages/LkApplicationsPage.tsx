import { SeoMetadata } from "../../../shared/navigation";
import { LkApplications } from "../components/LkApplications";

export const LkApplicationsPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Мои отклики"
        description="На странице моих откликов WorkNow вы можете просмотреть и управлять своими откликами на резюме или вакансии"
      />
      <LkApplications />
    </>
  );
};
