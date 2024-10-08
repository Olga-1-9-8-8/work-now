import { EyeIcon } from "lucide-react";
import { useViews } from "../../../../../../shared/features/views/hooks/useViews";
import { LkItemCardContentItem } from "./LkItemCardContentItem";
import { LkItemCardContentItemModal } from "./modal/LkItemCardContentItemModal";

interface LkItemCardContentViewsProps {
  id: number;
  isHiring: boolean;
  views?: number;
}

export const LkItemCardContentViews = ({ id, views, isHiring }: LkItemCardContentViewsProps) => {
  const { viewsData, isViewsLoading } = useViews(id, isHiring);

  return (
    <LkItemCardContentItem variant="view" icon={EyeIcon} count={views} isHiring={isHiring}>
      <LkItemCardContentItemModal data={viewsData} isLoading={isViewsLoading} />
    </LkItemCardContentItem>
  );
};
