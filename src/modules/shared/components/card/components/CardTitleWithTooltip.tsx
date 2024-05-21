import { Tooltip } from "../../../ui/tooltip/Tooltip";
import { TypographyH5 } from "../../../ui/typography/TypographyH5";
import { cn } from "../../../utils";
import { truncateText } from "../../../utils/helpers";

interface CardTitleWithTooltipProps {
  title: string;
  className?: string;
}

export const CardTitleWithTooltip = ({ title, className }: CardTitleWithTooltipProps) => (
  <Tooltip content={title} className={cn("max-w-96", className)}>
    <span>
      <TypographyH5 className="font-medium text-primary-extraDark">
        {truncateText(title, 55)}
      </TypographyH5>
    </span>
  </Tooltip>
);
