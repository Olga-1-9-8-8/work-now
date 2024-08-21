import { NotFound } from "../../../../../../shared/components/not-found";
import { useViews } from "../../../../../../shared/features/views/hooks/useViews";
import { Badge } from "../../../../../../shared/ui/badge/Badge";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { Spinner } from "../../../../../../shared/ui/spinner/Spinner";
import { formattedTimeString } from "../../../../../../shared/utils/helpers";

interface LkItemCardContentItemModalProps {
  id: number;
  isHiring: boolean;
}

export const LkItemCardContentItemModal = ({ id, isHiring }: LkItemCardContentItemModalProps) => {
  const { views, isViewsLoading } = useViews(id, isHiring);

  if (isViewsLoading) return <Spinner />;
  if (!views) return <NotFound title="Просмотры" />;
  return (
    <ul className="list-disc pl-6">
      {views.map((item) => (
        <li key={item.id} className="mb-2">
          <Button variant="ghost" size="sm" className="cursor-default font-bold text-dark">
            {item.userName}
          </Button>
          <Badge variant="secondary" className="ml-2">
            {formattedTimeString(item.createdAt)}
          </Badge>
        </li>
      ))}
    </ul>
  );
};
