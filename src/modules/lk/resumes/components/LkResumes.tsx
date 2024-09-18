import { useNavigate } from "react-router-dom";
import { NotExist, NotFound } from "../../../shared/components/not-found";
import { Button } from "../../../shared/ui/buttons/Button";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useProfileResumes } from "../../shared/hooks/useProfileResumes";
import { LkResumesList } from "./LkResumesList";

export const LkResumes = () => {
  const navigate = useNavigate();
  const { profileResumes, isProfileResumesLoading, totalProfileResumesCount } = useProfileResumes();

  if (isProfileResumesLoading) {
    return <Spinner />;
  }

  if (!profileResumes) {
    return <NotFound title="Резюме" />;
  }

  return totalProfileResumesCount ? (
    <LkResumesList resumes={profileResumes} totalCount={totalProfileResumesCount} />
  ) : (
    <NotExist
      title={
        <div className="flex items-center gap-4">
          <span>У вас пока нет резюме.</span>
          <Button onClick={() => navigate("/resumes/creation")} variant="success" size="sm">
            Создайте резюме
          </Button>
        </div>
      }
    />
  );
};
