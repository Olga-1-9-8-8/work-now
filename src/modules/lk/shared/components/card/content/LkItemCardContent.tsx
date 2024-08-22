import { EyeIcon, Mail } from "lucide-react";
import { useUserApplies } from "../../../../../shared/features/applies/hooks/useUserApplies";
import { useViews } from "../../../../../shared/features/views/hooks/useViews";
import { getModalTitle } from "../../../utils/getModalTitle";
import { LkItemCardContentItem } from "./item/LkItemCardContentItem";
import { LkItemCardContentItemModal } from "./item/LkItemCardContentItemModal";

interface LkItemCardContentProps {
  id: number;
  isHiring: boolean;
  views?: number;
  applicantsQuantity?: number;
}

export const LkItemCardContent = ({
  id,
  views,
  applicantsQuantity,
  isHiring,
}: LkItemCardContentProps) => {
  const { viewsData, isViewsLoading } = useViews(id, isHiring);
  const { appliesData, isAppliesLoading } = useUserApplies(id, isHiring);

  const items = [
    {
      icon: EyeIcon,
      count: views,
      title: "просмотр",
      titleModal: getModalTitle("просмотревших", isHiring),
      data: viewsData,
      isLoading: isViewsLoading,
    },
    {
      icon: Mail,
      count: applicantsQuantity,
      title: "отклик",
      titleModal: getModalTitle("откликнувшихся", isHiring),
      data: appliesData,
      isLoading: isAppliesLoading,
    },
  ];

  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <LkItemCardContentItem key={item.title} {...item}>
          <LkItemCardContentItemModal {...item} />
        </LkItemCardContentItem>
      ))}
    </div>
  );
};
