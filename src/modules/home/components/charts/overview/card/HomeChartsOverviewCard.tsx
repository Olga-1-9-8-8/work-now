import { ElementType } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../../shared/ui/card/Card";

interface HomeChartsOverviewCardProps {
  icon: ElementType;
  title: string;
  contentTitle: string;
  contentDescription: string;
}

export const HomeChartsOverviewCard = ({
  icon,
  title,
  contentTitle,
  contentDescription,
}: HomeChartsOverviewCardProps) => {
  const Icon = icon;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <Icon />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{contentTitle}</div>
        <p className="text-xs text-muted-foreground">{contentDescription}</p>
      </CardContent>
    </Card>
  );
};
