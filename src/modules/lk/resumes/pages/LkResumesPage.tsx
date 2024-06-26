import { NotExist } from "../../../shared/components/not-found";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useProfileResumes } from "../../shared/hooks/useProfileResumes";
import { LkResumes } from "../components/LkResumes";

export const LkResumesPage = () => {
  const { profileResumes, isProfileResumesLoading, totalProfileResumesCount } = useProfileResumes();

  if (isProfileResumesLoading) return <Spinner />;

  return profileResumes && totalProfileResumesCount ? (
    <LkResumes resumes={profileResumes} totalCount={totalProfileResumesCount} />
  ) : (
    <NotExist title="У вас пока нет резюме. Создайте резюме" />
  );
};
