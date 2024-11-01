import { Zap } from "lucide-react";
import { memo } from "react";
import { FaSpinner } from "react-icons/fa6";
import { Button, ButtonProps } from "../../../ui/buttons/Button";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { useApply } from "../hooks/useApply";
import { useHandleApply } from "../hooks/useHandleApply";

type AppliedButtonProps = {
  id: number;
  tooltipContent?: string;
} & Omit<ButtonProps, "id">;

export const AppliedButton = memo(({ id, tooltipContent, ...props }: AppliedButtonProps) => {
  const { isInApplies, isInAppliesLoading } = useApply(id);
  const { t } = useLanguageSwitcher("shared");

  const { handleApplyClick, isApplyDeleting, isApplyAdding } = useHandleApply(id, isInApplies);

  const isDisabled = isApplyDeleting || isApplyAdding || isInAppliesLoading;

  if (isInAppliesLoading)
    return (
      <div className="flex w-full min-w-32 items-center justify-center">
        <FaSpinner className="h-7 w-7 animate-spin-slow text-secondary" />
      </div>
    );

  return (
    <Tooltip
      content={
        tooltipContent ??
        (isInApplies ? t("shared.applies.tooltip.remove") : t("shared.applies.tooltip.apply"))
      }
      className="w-48"
    >
      <div>
        <Button
          className="w-full lg:w-auto"
          disabled={isDisabled}
          onClick={(e) => !isDisabled && handleApplyClick(e)}
          variant={isInApplies ? "destructive" : "success"}
          {...props}
        >
          {isApplyAdding || isApplyDeleting ? (
            <FaSpinner className="h-6 w-6 animate-spin-slow pr-1 text-secondary" />
          ) : (
            <Zap
              className={`mr-1 h-5 w-5 stroke-white group-hover:fill-destructive ${isInApplies && "fill-destructive"}`}
            />
          )}
          {isInApplies ? t("shared.applies.button.removed") : t("shared.applies.button.applied")}
        </Button>
      </div>
    </Tooltip>
  );
});
