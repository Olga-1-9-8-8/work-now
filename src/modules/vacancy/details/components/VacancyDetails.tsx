import { ArrowLeft } from "lucide-react";
import { DetailsCard } from "../../../shared/components/details-card";
import { NotFound } from "../../../shared/components/not-found/components";
import { useMoveBack } from "../../../shared/hooks/useMoveBack";
import { Button } from "../../../shared/ui/buttons/Button";
import { PageContainer } from "../../../shared/ui/layout";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useVacancy } from "../hooks/useVacancy";

export const VacancyDetails = () => {
  const { vacancy, isLoading } = useVacancy();
  const moveBack = useMoveBack();

  const handleApplyClick = (isApplied: boolean) => {
    console.log(isApplied, vacancy);
  };

  const handleFavoriteClick = (isFavorite: boolean) => {
    console.log(isFavorite, vacancy);
  };

  if (isLoading) return <Spinner />;

  return (
    <PageContainer>
      <Button variant="link" onClick={moveBack} className="mt-4 p-0 font-bold">
        <ArrowLeft size={20} className="mr-1 stroke-primary-extraDark" /> Назад
      </Button>
      {vacancy ? (
        <DetailsCard
          className="mb-8 mt-4"
          data={vacancy}
          onApplyClick={handleApplyClick}
          onFavoriteClick={handleFavoriteClick}
          isHiring
        />
      ) : (
        <NotFound title="Детали вакансии" />
      )}
    </PageContainer>
  );
};
