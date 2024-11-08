import { useNavigate } from "react-router-dom";
import { NotExist, NotFound } from "../../../shared/components/not-found";
import { Button } from "../../../shared/ui/buttons/Button";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { useProfileResumes } from "../../shared/hooks/useProfileResumes";
import { LkResumesList } from "./LkResumesList";

export const LkResumes = () => {
  const navigate = useNavigate();
  const { profileResumes, isProfileResumesLoading, totalProfileResumesCount } = useProfileResumes();
  const { t } = useLanguageSwitcher("lk");

  if (isProfileResumesLoading) {
    return <Spinner />;
  }

  if (!profileResumes) {
    return <NotFound title={t("lk.resumes.notFoundTitle")} />;
  }

  return totalProfileResumesCount ? (
    <LkResumesList resumes={profileResumes} totalCount={totalProfileResumesCount} />
  ) : (
    <NotExist
      title={
        <div className="flex flex-col items-center gap-4">
          <span>{t("lk.resumes.notExist.title")}</span>
          <Button onClick={() => navigate("/resumes/creation")} variant="success" size="sm">
            {t("lk.resumes.buttonTitle")}
          </Button>
        </div>
      }
    />
  );
};
