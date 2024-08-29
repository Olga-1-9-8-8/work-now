import { ClipboardCheck, FilePlus2, RefreshCw } from "lucide-react";
import { AppliedButton } from "../../../../../../../features/applies";
import { FavoriteButton } from "../../../../../../../features/favorites";
import { useUser } from "../../../../../../../services/auth";
import { UserEntity } from "../../../../../../../types";
import { CardDescription } from "../../../../../../../ui/card/Card";
import {
  formattedTimeString,
  getRightNounWordDeclension,
} from "../../../../../../../utils/helpers";

interface DetailsCardHeaderOperationsProps {
  id: number | string;
  isHiring?: boolean;
  creationDate: Date;
  updatedAt?: Date | null;
  applicantsQuantity: number;
  isInFavorites?: boolean;
  isInApplies?: boolean;
}
export const DetailsCardHeaderOperations = ({
  id,
  isHiring,
  updatedAt,
  creationDate,
  applicantsQuantity,
  isInFavorites,
  isInApplies,
}: DetailsCardHeaderOperationsProps) => {
  const { isAuthenticated, role } = useUser();

  const isDisabled = !isAuthenticated || !!isHiring === (role === UserEntity.Company);

  const getTooltipContent = () => {
    return `Войдите как ${isHiring ? "кандидат" : "компания"}, чтобы добавить ${isHiring ? "вакансию" : "резюме"}`;
  };

  const getApplicantsQuantityText = () => {
    const word = isHiring ? "кандидат" : "компан";
    const endings = isHiring ? ["", "а", "ов"] : ["ия", "ии", "ий"];
    const declension = getRightNounWordDeclension(applicantsQuantity, word, endings);
    return `${declension} уже ${getRightNounWordDeclension(applicantsQuantity, "откликнул", [`${isHiring ? "ся" : "ась"}`, "ись", "ись"]).slice(1)}`;
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="md:flex-start flex flex-row-reverse justify-end gap-8 md:flex-row">
        <FavoriteButton
          id={id}
          role={role}
          isInFavorites={isInFavorites}
          tooltipContent={isDisabled ? `${getTooltipContent()} в Избранное` : undefined}
          disabled={isDisabled}
        />
        <AppliedButton
          id={id}
          isInApplies={isInApplies}
          disabled={isDisabled}
          tooltipContent={isDisabled ? `${getTooltipContent()} в Отклики` : undefined}
        />
      </div>
      <p className="mt-2 flex gap-1 text-sm font-medium text-muted-foreground">
        <ClipboardCheck size={20} className="stroke-success" />
        {getApplicantsQuantityText()}
      </p>
      <div className="flex flex-wrap gap-4 md:flex-col md:gap-2">
        <CardDescription className="mt-2 flex gap-1 font-semibold text-muted-foreground opacity-85">
          <FilePlus2 size={20} className="stroke-success" />
          Создано {formattedTimeString(creationDate)}
        </CardDescription>

        {updatedAt && (
          <CardDescription className="mt-2 flex gap-1 font-semibold text-muted-foreground opacity-85">
            <RefreshCw size={20} className="stroke-success" />
            Обновлено {formattedTimeString(updatedAt)}
          </CardDescription>
        )}
      </div>
    </div>
  );
};
