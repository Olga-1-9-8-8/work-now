import { BackButton } from "../../../shared/components/buttons";
import { DetailsCard } from "../../../shared/components/details-card";
import { NotFound } from "../../../shared/components/not-found";
import { PageContainer } from "../../../shared/ui/layout";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { useVacancy } from "../hooks/useVacancy";

export const VacancyDetails = () => {
  const { t } = useLanguageSwitcher("vacancy");

  const { vacancy, isLoading } = useVacancy();
  if (isLoading) return <Spinner />;

  return (
    <PageContainer>
      <BackButton />
      {vacancy ? (
        <DetailsCard className="mb-8 mt-4" data={vacancy} isHiring />
      ) : (
        <NotFound title={t("vacancy.details.notExist")} />
      )}
    </PageContainer>
  );
};
