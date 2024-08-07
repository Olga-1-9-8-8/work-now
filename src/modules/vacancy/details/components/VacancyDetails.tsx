import { useParams } from "react-router-dom";
import { BackButton } from "../../../shared/components/buttons";
import { DetailsCard } from "../../../shared/components/details-card";
import { NotFound } from "../../../shared/components/not-found";
import { PageContainer } from "../../../shared/ui/layout";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useVacancy } from "../hooks/useVacancy";

export const VacancyDetails = () => {
  const { id } = useParams();
  const { vacancy, isLoading } = useVacancy(Number(id));

  if (isLoading) return <Spinner />;

  return (
    <PageContainer>
      <BackButton />
      {vacancy ? (
        <DetailsCard className="mb-8 mt-4" data={vacancy} isHiring />
      ) : (
        <NotFound title="Детали вакансии" />
      )}
    </PageContainer>
  );
};
