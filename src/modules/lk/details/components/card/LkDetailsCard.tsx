import { ReactNode } from "react";
import { Card, CardContent, CardTitle } from "../../../../shared/ui/card/Card";
import { Spinner } from "../../../../shared/ui/spinner/Spinner";

interface LkDetailsCardProps {
  title: string;
  isLoading?: boolean;
  children: ReactNode;
}

export const LkDetailsCard = ({ title, isLoading, children }: LkDetailsCardProps) => {
  return (
    <div className="xs:gap-6 flex flex-col gap-4">
      <CardTitle>{title}</CardTitle>
      <Card className="w-full">
        <CardContent className="p-10">{isLoading ? <Spinner /> : children}</CardContent>
      </Card>
    </div>
  );
};
