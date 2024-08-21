import { EyeIcon, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DrawerDialogResponsive } from "../../../../../shared/ui/drawer-dialog/DrawerDialogResponsive";
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
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <DrawerDialogResponsive
        button={
          <div>
            <LkItemCardContentItem icon={EyeIcon} title="просмотр" count={views} />
          </div>
        }
        title={getModalTitle("просмотревших", isHiring)}
      >
        <LkItemCardContentItemModal id={id} isHiring={isHiring} />
      </DrawerDialogResponsive>

      <LkItemCardContentItem
        icon={Mail}
        count={applicantsQuantity}
        title="отклик"
        onClick={() => navigate(`/lk/applications/`)}
      />
    </div>
  );
};
