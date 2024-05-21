import { ClipboardCheck, Heart, RefreshCw, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../../../../ui/buttons/Button";
import { CardDescription } from "../../../../../../../ui/card/Card";
import { formattedTimeString } from "../../../../../../../utils/helpers";

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
  const [isApplied, setIsApplied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => {
      onFavoriteClick(!prevIsFavorite);
      return !prevIsFavorite;
    });
  };

  const handleApplyClick = () => {
    setIsApplied((prevIsApplied) => {
      onApplyClick(!prevIsApplied);
      return !prevIsApplied;
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="md:flex-start flex flex-row-reverse justify-end gap-8 md:flex-row">
        <Button
          className={`w-fix group px-2 ${isFavorite && "border-2 border-destructive"}`}
          variant="outline"
          disabled={disabled}
          size="icon"
          onClick={handleFavoriteClick}
        >
          <Heart
            className={`stroke-destructive group-hover:fill-destructive ${isFavorite && "fill-destructive"}`}
          />
        </Button>

        <Button onClick={handleApplyClick} variant={isApplied ? "destructive" : "success"}>
          <Zap
            className={`mr-3 stroke-white group-hover:fill-destructive ${isApplied && "fill-destructive"}`}
          />
          {isApplied ? "Вы откликнулись" : "Откликнуться"}
        </Button>
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
