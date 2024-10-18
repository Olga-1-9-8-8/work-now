import { ReactElement, ReactNode } from "react";
import { Tooltip } from "../../ui/tooltip/Tooltip";
import { cn } from "../../utils";

interface CountLabelWithTooltipProps<T> {
  title: ReactNode;
  items: T[];
  renderContent: (item: T) => ReactElement;
  className?: string;
  badgeClassName?: string;
}

export const CountLabelWithTooltip = <T,>({
  title,
  items,
  renderContent,
  className,
  badgeClassName,
}: CountLabelWithTooltipProps<T>) => {
  return (
    <Tooltip
      content={
        items.length > 1 && (
          <div className="flex flex-col gap-2">
            {items
              .slice(1)
              .filter(Boolean)
              .map((item) => renderContent(item))}
          </div>
        )
      }
      className={cn("min-w-20", className)}
    >
      <div
        className={`flex items-center gap-1 text-wrap ${items.length > 1 && "hover:opacity-85"}`}
      >
        {title}
        {items.length > 1 && (
          <div
            className={cn(
              "flex h-5 w-5  items-center justify-center rounded-e-md bg-success",
              badgeClassName,
            )}
          >
            <span className="text-[0.8rem] text-white"> +{items.length - 1}</span>
          </div>
        )}
      </div>
    </Tooltip>
  );
};
