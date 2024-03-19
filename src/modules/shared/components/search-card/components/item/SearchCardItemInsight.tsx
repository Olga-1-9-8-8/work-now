import { ElementType } from "react";
import { Badge } from "../../../../ui/badge/Badge";
import { cn } from "../../../../utils/cn";
import { WorkType } from "../../types/WorkType";
import { getIconByType } from "../../utils/getIconByType";

interface SearchCardItemInsightProps {
  icon: ElementType;
  title: string;
  badges?: { title?: string; variant?: WorkType }[];
  className?: string;
}

export const SearchCardItemInsight = ({
  icon,
  title,
  badges,
  className,
}: SearchCardItemInsightProps) => {
  const Icon = icon;
  return (
    <div className={cn("flex gap-4 ", className)}>
      <Icon className="stroke-primary-extraDark" />
      <div className="flex w-full flex-col gap-2">
        <h4 className="text-sm font-bold">{title}</h4>
        {badges && (
          <ul className="flex flex-wrap gap-2">
            {badges.map((badge, index) => {
              const { badgeIcon, badgeVariant } = getIconByType(badge.variant);
              const BadgeIcon = badgeIcon;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <Badge className="flex gap-1" variant={badgeVariant} shape="square">
                    {BadgeIcon && <BadgeIcon size={20} />}
                    {badge?.title}
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
