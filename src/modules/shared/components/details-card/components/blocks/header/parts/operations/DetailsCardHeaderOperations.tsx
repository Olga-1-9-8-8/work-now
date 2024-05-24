import { ClipboardCheck, RefreshCw } from "lucide-react";
import { CardDescription } from "../../../../../../../ui/card/Card";
import { formattedTimeString } from "../../../../../../../utils/helpers";
import { AppliedButton, FavoriteButton } from "../../../../../../buttons";

interface DetailsCardHeaderOperationsProps {
  isHiring?: boolean;
  creationDate?: Date | null;
  onApplyClick: (isApplied: boolean) => void;
  onFavoriteClick: (isFavorite: boolean) => void;
  applicantsQuantity?: number;
  disabled: boolean;
}
export const DetailsCardHeaderOperations = ({
  disabled,
  isHiring,
  onApplyClick,
  onFavoriteClick,
  creationDate,
  applicantsQuantity,
}: DetailsCardHeaderOperationsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="md:flex-start flex flex-row-reverse justify-end gap-8 md:flex-row">
        <FavoriteButton onClick={onFavoriteClick} disabled={disabled} />
        <AppliedButton onClick={onApplyClick} />
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
