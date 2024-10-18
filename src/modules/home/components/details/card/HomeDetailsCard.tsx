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
    <Card className="flex flex-col justify-between pb-5 pt-2 md:w-[700px] xl:w-[500px]">
      <div>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </div>
    </Card>
  );
};
