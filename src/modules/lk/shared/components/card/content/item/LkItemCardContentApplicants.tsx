import { Mail } from "lucide-react";
import { useUserApplies } from "../../../../../../shared/features/applies/hooks/useUserApplies";
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
      variant="apply"
      icon={Mail}
      count={applicantsQuantity}
      isHiring={isHiring}
    >
      <LkItemCardContentItemModal data={appliesData} isLoading={isAppliesLoading} />
    </LkItemCardContentItem>
  );
};
