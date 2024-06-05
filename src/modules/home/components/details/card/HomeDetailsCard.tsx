import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../shared/ui/card/Card";

interface HomeDetailsCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export const HomeDetailsCard = ({ title, description, children }: HomeDetailsCardProps) => {
  return (
    <Card className="flex w-[400px] flex-col justify-between pb-5 pt-2 md:w-[600px] lg:w-[500px]">
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>{children}</div>
        </CardContent>
      </div>
    </Card>
  );
};
