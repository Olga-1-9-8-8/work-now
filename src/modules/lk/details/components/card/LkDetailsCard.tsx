import { ReactNode } from "react";
import { Card, CardContent, CardTitle } from "../../../../shared/ui/card/Card";

interface LkDetailsCardProps {
  title: string;
  children: ReactNode;
}

export const LkDetailsCard = ({ title, children }: LkDetailsCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <CardTitle>{title}</CardTitle>
      <Card className="w-50vh md:w-3/5">
        <CardContent className="p-10">{children}</CardContent>
      </Card>
    </div>
  );
};
