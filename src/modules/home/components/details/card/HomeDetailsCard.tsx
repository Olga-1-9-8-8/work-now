import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "../../../../shared/ui/buttons/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    <Card className="flex w-[400px] flex-col justify-between md:w-[600px] lg:w-[500px]">
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>{children}</div>
        </CardContent>
      </div>

      <CardFooter>
        <Button className="flex w-full gap-4">
          Читай далее <ArrowRight className="mr-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
