import { ResumeCreationForm, useCreateResume } from "../../../../resume/creation";
import { UniversalJobType } from "../../../../shared/types";
import { LkItemCard } from "../../../shared";
import { useDeleteResume } from "../../hooks/useDeleteResume";

interface LkResumesCardProps {
  resume: UniversalJobType;
}

export const LkResumesCard = ({ resume }: LkResumesCardProps) => {
  const { createResume, isCreating } = useCreateResume();
  const { deleteResume, isDeleting } = useDeleteResume();

  return (
    <LkItemCard
      item={resume}
      onDeleteItem={() => deleteResume(resume.id)}
      isItemDeleting={isDeleting}
      onCreateItem={createResume}
      isItemDuplicating={isCreating}
    >
      <ResumeCreationForm resume={resume} userId={resume.userId} />
    </LkItemCard>
  );
};
