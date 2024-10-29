import { NotExist } from "../../../../../../../shared/components/not-found";
import { LanguageType } from "../../../../../../../shared/configs";
import { UniversalEngagementType } from "../../../../../../../shared/types";
import { Badge } from "../../../../../../../shared/ui/badge/Badge";
import { Button } from "../../../../../../../shared/ui/buttons/Button";
import { Spinner } from "../../../../../../../shared/ui/spinner/Spinner";
import { formattedTimeString } from "../../../../../../../shared/utils/helpers";
import { useLanguageSwitcher } from "../../../../../../../shared/widgets/languages-switcher";

interface LkItemCardContentItemModalProps {
  data?: UniversalEngagementType[];
  isLoading: boolean;
}

export const LkItemCardContentItemModal = ({
  data,
  isLoading,
}: LkItemCardContentItemModalProps) => {
  const { t, language } = useLanguageSwitcher("lk");

  if (isLoading) return <Spinner />;
  if (!data) return <NotExist title={t("lk.noData")} />;

  return (
    <ul className="list-decimal pl-6">
      {data.map((item) => (
        <li key={item.id} className="mb-2">
          <Button variant="ghost" size="sm" className="cursor-default font-bold text-dark">
            {item.userName}
          </Button>
          <Badge variant="secondary" className="ml-2">
            {formattedTimeString(item.createdAt, language as LanguageType)}
          </Badge>
        </li>
      ))}
    </ul>
  );
};
