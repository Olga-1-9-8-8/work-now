import { ClipboardCheck, RefreshCw } from "lucide-react";
import { AppliedButton } from "../../../../../../../features/applies";
import { FavoriteButton } from "../../../../../../../features/favorites";
import { CardDescription } from "../../../../../../../ui/card/Card";
import { formattedTimeString } from "../../../../../../../utils/helpers";

interface DetailsCardHeaderOperationsProps {
  id: number | string;
  isHiring?: boolean;
  creationDate?: Date | null;
  applicantsQuantity?: number;
  isInFavorites?: boolean;
  isInApplies?: boolean;
}
export const DetailsCardHeaderOperations = ({
  id,
  isHiring,
  creationDate,
  applicantsQuantity,
  isInFavorites,
  isInApplies,
}: DetailsCardHeaderOperationsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="md:flex-start flex flex-row-reverse justify-end gap-8 md:flex-row">
        <FavoriteButton id={id} isInFavorites={isInFavorites} />
        <AppliedButton id={id} isInApplies={isInApplies} />
      </div>
      <p className="mt-2 flex gap-1 text-sm font-medium text-muted-foreground">
        <ClipboardCheck size={20} className="stroke-success" />
        <strong>{applicantsQuantity}</strong> {isHiring ? "человек" : "компаний"} уже откликнулись
      </p>
      {creationDate && (
        <CardDescription className="mt-2 flex gap-1 font-semibold text-muted-foreground opacity-85">
          <RefreshCw size={20} className="stroke-success" />
          Обновлено {formattedTimeString(creationDate)}
        </CardDescription>
      )}
    </div>
  );
};
