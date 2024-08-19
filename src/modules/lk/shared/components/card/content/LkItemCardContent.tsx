import { EyeIcon, Mail } from "lucide-react";
import { getModalTitle } from "../../../utils/getModalTitle";
import { LkItemCardContentItem } from "./item/LkItemCardContentItem";
import { LkItemCardContentItemModal } from "./item/LkItemCardContentItemModal";

interface LkItemCardContentProps {
  isHiring?: boolean;
  views?: number;
  applicantsQuantity?: number;
}

export const LkItemCardContent = ({
  views,
  applicantsQuantity,
  isHiring,
}: LkItemCardContentProps) => {
  return (
    <div className="flex gap-4">
      <LkItemCardContentItem
        icon={EyeIcon}
        title="просмотр"
        count={views}
        modalTitle={getModalTitle("просмотревших", isHiring)}
      >
        <LkItemCardContentItemModal />
      </LkItemCardContentItem>
      <LkItemCardContentItem
        icon={Mail}
        count={applicantsQuantity}
        title="отклик"
        modalTitle={getModalTitle("откликнувшихся на", isHiring)}
      >
        <LkItemCardContentItemModal />
      </LkItemCardContentItem>
    </div>
  );
};
