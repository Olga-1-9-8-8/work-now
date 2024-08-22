import { NotExist } from "../../../../../../shared/components/not-found";
import { UniversalEngagementType } from "../../../../../../shared/types";
import { Badge } from "../../../../../../shared/ui/badge/Badge";
import { Button } from "../../../../../../shared/ui/buttons/Button";
import { Spinner } from "../../../../../../shared/ui/spinner/Spinner";
import { formattedTimeString } from "../../../../../../shared/utils/helpers";

interface LkItemCardContentItemModalProps {
  data?: UniversalEngagementType[];
  isLoading: boolean;
}

export const LkItemCardContentItemModal = ({
  data,
  isLoading,
}: LkItemCardContentItemModalProps) => {
  if (isLoading) return <Spinner />;
  if (!data) return <NotExist title="Данные не найдены" />;
  return (
    <ul className="list-decimal pl-6">
      {data.map((item) => (
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
