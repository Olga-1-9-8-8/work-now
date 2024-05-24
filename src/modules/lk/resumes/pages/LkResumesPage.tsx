import { useResumes } from "../../../resume/list/hooks/useResumes";
import { NotExist } from "../../../shared/components/not-found/components";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { LkResumes } from "../components/LkResumes";

export const LkResumesPage = () => {
  const { resumes, isLoading, totalCount } = useResumes();

  if (isLoading) return <Spinner />;

  return resumes ? (
    <LkResumes resumes={resumes} totalCount={totalCount} />
  ) : (
    <NotExist title="У вас пока нет резюме. Создайте резюме" />
  );
};
