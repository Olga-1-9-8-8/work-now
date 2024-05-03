import { ElementType } from "react";
import { Badge } from "../../../../ui/badge/Badge";
import { cn } from "../../../../utils/cn";
import { BadgeItem, BadgeType } from "../../types/BadgeType";

interface SearchCardItemInsightProps<T> {
  icon: ElementType;
  title: string;
  badges?: BadgeItem<T>[];
  getBadgeData?: (type?: T) => BadgeType;
  className?: string;
}

export const SearchCardItemInsight = <T extends string>({
  icon,
  title,
  badges,
  getBadgeData,
  className,
}: SearchCardItemInsightProps<T>) => {
  const Icon = icon;
  return (
    <div className={cn("flex gap-4 ", className)}>
      <Icon className="stroke-primary-extraDark" />
      <div className="flex w-full flex-col gap-2">
        <h4 className="text-sm font-bold">{title}</h4>
        {badges && (
          <ul className="flex flex-wrap gap-2">
            {badges.map((badge, index) => {
              const { badgeIcon, badgeVariant, badgeTitle } = getBadgeData?.(badge.title) ?? {
                badgeVariant: "secondary",
              };
              const BadgeIcon = badgeIcon;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <Badge className="flex gap-1 text-nowrap" variant={badgeVariant} shape="square">
                    {BadgeIcon && <BadgeIcon size={20} />}
                    <span>{badgeTitle || badge?.title}</span>
                  </Badge>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
