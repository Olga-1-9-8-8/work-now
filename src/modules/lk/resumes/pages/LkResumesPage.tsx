import { NotExist } from "../../../shared/components/not-found/components";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLkContext } from "../../shared/context";
import { LkResumes } from "../components/LkResumes";

export const LkResumesPage = () => {
  const {
    profileResumes: { totalCount, profileResumes, isLoading },
  } = useLkContext();

  if (isLoading) return <Spinner />;

  return profileResumes && totalCount ? (
    <LkResumes resumes={profileResumes} totalCount={totalCount} />
  ) : (
    <NotExist title="У вас пока нет резюме. Создайте резюме" />
  );
};
