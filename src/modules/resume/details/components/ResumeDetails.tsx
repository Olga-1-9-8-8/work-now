import { BackButton } from "../../../shared/components/buttons";
import { DetailsCard } from "../../../shared/components/details-card";
import { NotExist } from "../../../shared/components/not-found";
import { PageContainer } from "../../../shared/ui/layout";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { useResume } from "../hooks/useResume";

export const ResumeDetails = () => {
  const { t } = useLanguageSwitcher("resume");
  const { resume, isLoading } = useResume();
  if (isLoading) return <Spinner />;

  return (
    <PageContainer>
      <BackButton />
      {resume ? (
        <DetailsCard className="mb-8 mt-4" data={resume} />
      ) : (
        <NotExist title={t("resume.details.notExist")} />
      )}
    </PageContainer>
  );
};
