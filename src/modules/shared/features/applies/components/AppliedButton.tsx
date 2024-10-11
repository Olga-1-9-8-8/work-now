import { Zap } from "lucide-react";
import { useLayoutEffect, useState } from "react";
import { Button, ButtonProps } from "../../../ui/buttons/Button";
import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useAddApply } from "../hooks/useAddApply";
import { useDeleteApply } from "../hooks/useDeleteApply.";

type AppliedButtonProps = {
  id: number | string;
  isInApplies?: boolean;
  tooltipContent?: string;
} & Omit<ButtonProps, "id">;

export const AppliedButton = ({
  id,
  isInApplies = false,
  tooltipContent,
  ...props
}: AppliedButtonProps) => {
  const [isApplied, setIsApplied] = useState(isInApplies);
  const { deleteApply, isApplyDeleting } = useDeleteApply();
  const { addApply, isApplyAdding } = useAddApply();

  const { t } = useLanguageSwitcher("shared");

  useLayoutEffect(() => {
    if (isInApplies) setIsApplied(isInApplies);
  }, [isInApplies]);

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsApplied((prevIsApplied) => {
      if (prevIsApplied) {
        deleteApply(id);
      } else {
        addApply(id);
      }

      return !prevIsApplied;
    });
  };

  return (
    <Tooltip
      content={
        tooltipContent ??
        (isApplied ? t("shared.applies.tooltip.remove") : t("shared.applies.tooltip.apply"))
      }
      className="w-48"
    >
      <div>
        <Button
          className="w-full lg:w-auto"
          disabled={isApplyDeleting || isApplyAdding}
          onClick={handleApplyClick}
          variant={isApplied ? "destructive" : "success"}
          {...props}
        >
          <Zap
            className={`mr-1 h-5 w-5 stroke-white group-hover:fill-destructive ${isApplied && "fill-destructive"}`}
          />
          {isApplied ? t("shared.applies.button.removed") : t("shared.applies.button.applied")}
        </Button>
      </div>
    </Tooltip>
  );
};
