import { ClipboardCheck, FilePlus2, RefreshCw } from "lucide-react";
import { useMemo } from "react";
import { LanguageType } from "../../../../../../../configs";
import { AppliedButton } from "../../../../../../../features/applies";
import { FavoriteButton } from "../../../../../../../features/favorites";
import { useUser } from "../../../../../../../services/auth";
import { UserEntity } from "../../../../../../../types";
import { CardDescription } from "../../../../../../../ui/card/Card";
import { formattedTimeString } from "../../../../../../../utils/helpers";
import { useLanguageSwitcher } from "../../../../../../../widgets/languages-switcher";

interface DetailsCardHeaderOperationsProps {
  id: number;
  isHiring?: boolean;
  creationDate: Date;
  updatedAt?: Date | null;
  applicantsQuantity: number;
  userId: string;
}
export const DetailsCardHeaderOperations = ({
  id,
  isHiring,
  updatedAt,
  creationDate,
  applicantsQuantity,
  userId,
}: DetailsCardHeaderOperationsProps) => {
  const { isAuthenticated, role, user } = useUser();

  const { language, t } = useLanguageSwitcher("shared");

  const isDisabled = !isAuthenticated || !!isHiring === (role === UserEntity.Company);

  const getApplicantsQuantityText = useMemo(() => {
    if (applicantsQuantity === 0) return t("shared.details.card.operations.noApplicants");
    return isHiring
      ? t("shared.details.card.operations.candidate.apply", { count: applicantsQuantity })
      : t("shared.details.card.operations.company.apply", { count: applicantsQuantity });
  }, [applicantsQuantity, isHiring, t]);

  return (
    <div className="flex flex-col gap-3">
      {user?.id !== userId && (
        <div className="md:flex-start flex flex-row-reverse justify-end gap-8 md:flex-row">
          <FavoriteButton
            id={id}
            role={role}
            tooltipContent={
              isDisabled
                ? isHiring
                  ? t("shared.details.card.operations.tooltip.favorites.candidate")
                  : t("shared.details.card.operations.tooltip.favorites.company")
                : undefined
            }
            disabled={isDisabled}
          />
          <AppliedButton
            id={id}
            disabled={isDisabled}
            tooltipContent={
              isDisabled
                ? isHiring
                  ? t("shared.details.card.operations.tooltip.applies.candidate")
                  : t("shared.details.card.operations.tooltip.applies.company")
                : undefined
            }
          />
        </div>
      )}
      <p className="mt-2 flex gap-1 text-sm font-medium text-muted-foreground">
        <ClipboardCheck size={20} className="stroke-success" />
        {getApplicantsQuantityText}
      </p>
      <div className="flex flex-wrap gap-4 md:flex-col md:gap-2">
        <CardDescription className="mt-2 flex gap-1 font-semibold text-muted-foreground opacity-85">
          <FilePlus2 size={20} className="stroke-success" />
          {t("shared.created")} {formattedTimeString(creationDate, language as LanguageType)}
        </CardDescription>

        {updatedAt && (
          <CardDescription className="mt-2 flex gap-1 font-semibold text-muted-foreground opacity-85">
            <RefreshCw size={20} className="stroke-success" />
            {t("shared.updated")} {formattedTimeString(updatedAt, language as LanguageType)}
          </CardDescription>
        )}
      </div>
    </div>
  );
};
