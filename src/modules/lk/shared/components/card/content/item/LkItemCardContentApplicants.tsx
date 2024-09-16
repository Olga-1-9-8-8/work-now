import { Mail } from "lucide-react";
import { useUserApplies } from "../../../../../../shared/features/applies/hooks/useUserApplies";
import { getModalTitle } from "../../../../utils/getModalTitle";
import { LkItemCardContentItem } from "./LkItemCardContentItem";
import { LkItemCardContentItemModal } from "./modal/LkItemCardContentItemModal";

interface LkItemCardContentApplicantsProps {
  id: number;
  isHiring: boolean;
  applicantsQuantity?: number;
}

export const LkItemCardContentApplicants = ({
  id,
  applicantsQuantity,
  isHiring,
}: LkItemCardContentApplicantsProps) => {
  const { appliesData, isAppliesLoading } = useUserApplies(id, isHiring);

  return (
    <LkItemCardContentItem
      icon={Mail}
      count={applicantsQuantity}
      title="отклик"
      titleModal={getModalTitle("откликнувшихся на", isHiring)}
    >
      <LkItemCardContentItemModal data={appliesData} isLoading={isAppliesLoading} />
    </LkItemCardContentItem>
  );
};
