import { BackButton } from "../../../shared/components/buttons";
import { DetailsCard } from "../../../shared/components/details-card";
import { NotFound } from "../../../shared/components/not-found/components";
import { PageContainer } from "../../../shared/ui/layout";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useApplyResume } from "../hooks/useApplyResume";
import { useResume } from "../hooks/useResume";

export const ResumeDetails = () => {
  const { resume, isLoading } = useResume();

  const { applyResume, isApplyingResume } = useApplyResume();

  const handleApplyClick = (isApplied: boolean) => {
    if (resume) {
      applyResume({ id: resume.id, applicantsQuantity: resume.applicantsQuantity, isApplied });
    }
  };

  const handleFavoriteClick = (isFavorite: boolean) => {
    if (resume) {
      console.log(isFavorite);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <PageContainer>
      <BackButton />
      {resume ? (
        <DetailsCard
          className="mb-8 mt-4"
          data={resume}
          onApplyClick={handleApplyClick}
          onFavoriteClick={handleFavoriteClick}
          disabled={isApplyingResume}
        />
      ) : (
        <NotFound title="Детали резюме" />
      )}
    </PageContainer>
  );
};
