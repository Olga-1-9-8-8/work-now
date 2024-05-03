import { NotFound } from "../../../shared/components/not-found/components";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { LkResumes } from "../components/LkResumes";
import { useResumes } from "../hooks";

export const LkResumesPage = () => {
  const { resumes, isLoading, totalCount } = useResumes();

  if (isLoading) return <Spinner />;

  return resumes ? (
    <LkResumes resumes={resumes} totalCount={totalCount} />
  ) : (
    <NotFound title="Резюме" />
  );
};
