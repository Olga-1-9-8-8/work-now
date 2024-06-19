import { BackButton } from "../../../shared/components/buttons";
import { DetailsCard } from "../../../shared/components/details-card";
import { NotFound } from "../../../shared/components/not-found/components";
import { PageContainer } from "../../../shared/ui/layout";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useVacancy } from "../hooks/useVacancy";

export const VacancyDetails = () => {
  const { vacancy, isLoading } = useVacancy();

  const handleApplyClick = (isApplied: boolean) => {
    console.log(isApplied, vacancy);
  };

  const handleFavoriteClick = (isFavorite: boolean) => {
    console.log(isFavorite, vacancy);
  };

  if (isLoading) return <Spinner />;

  return (
    <PageContainer>
      <BackButton />
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
