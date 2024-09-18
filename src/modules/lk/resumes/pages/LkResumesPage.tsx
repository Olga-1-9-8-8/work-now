import { SeoMetadata } from "../../../shared/navigation";
import { LkResumes } from "../components/LkResumes";

export const LkResumesPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Мои Резюме"
        description=" На странице моих резюме WorkNow вы можете легко управлять всеми вашими резюме в одном месте"
      />
      <LkResumes />
    </>
  );
};
