import { LucideLoader2 } from "lucide-react";
import { ElementType } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../../../shared/ui/card/Card";

interface HomeChartsOverviewCardProps {
  icon: ElementType;
  title: string;
  value: number | string;
  isLoading?: boolean;
}

export const HomeChartsOverviewCard = ({
  icon,
  title,
  value,
  isLoading,
}: HomeChartsOverviewCardProps) => {
  const Icon = icon;
  return (
    <Card className="h-full min-h-32">
      <div className="flex h-full flex-col justify-between">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="pr-4 text-sm font-medium">{title}</CardTitle>
          <Icon className="stroke-primary-extraDark" size={32} />
        </CardHeader>
        <CardContent>
          <div className="flex justify-center text-xl font-bold">
            {isLoading ? (
              <LucideLoader2
                size={35}
                className="animate-spin text-center text-primary-extraDark"
              />
            ) : (
              value
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
