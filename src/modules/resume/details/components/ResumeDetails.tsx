import { ArrowLeft } from "lucide-react";
import { DetailsCard } from "../../../shared/components/details-card";
import { NotFound } from "../../../shared/components/not-found/components";
import { useMoveBack } from "../../../shared/hooks/useMoveBack";
import { Button } from "../../../shared/ui/buttons/Button";
import { PageContainer } from "../../../shared/ui/layout";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useApplyResume } from "../hooks/useApplyResume";
import { useResume } from "../hooks/useResume";

export const ResumeDetails = () => {
  const { resume, isLoading } = useResume();
  const moveBack = useMoveBack();

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
      <Button variant="link" onClick={moveBack} className="mt-4 p-0 font-bold">
        <ArrowLeft size={20} className="mr-1 stroke-primary-extraDark" /> Назад
      </Button>
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
