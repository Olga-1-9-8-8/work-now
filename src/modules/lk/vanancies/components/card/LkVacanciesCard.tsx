import { UniversalJobType } from "../../../../shared/types";
import { VacancyCreationForm, useCreateVacancy } from "../../../../vacancy/creation";
import { LkItemCard } from "../../../shared";
import { useDeleteVacancy } from "../../hooks/useDeleteVacancy";

interface LkVacanciesCardProps {
  vacancy: UniversalJobType;
}

export const LkVacanciesCard = ({ vacancy }: LkVacanciesCardProps) => {
  const { createVacancy, isCreatingVacancy } = useCreateVacancy();
  const { deleteVacancy, isDeletingVacancy } = useDeleteVacancy();

  return (
    <LkItemCard
      item={vacancy}
      onDeleteItem={() => deleteVacancy(vacancy.id)}
      isItemDeleting={isDeletingVacancy}
      onCreateItem={createVacancy}
      isItemDuplicating={isCreatingVacancy}
      isHiring
    >
      <VacancyCreationForm vacancy={vacancy} userId={vacancy.userId} />
    </LkItemCard>
  );
};
