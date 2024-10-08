import { ReactNode } from "react";
import { NoRoadIcon } from "../../../ui/icons";
import { TypographyH6 } from "../../../ui/typography/TypographyH6";

interface NotFoundProps {
  title: string;
  description?: ReactNode;
}

export const NotFound = ({ title, description }: NotFoundProps) => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <TypographyH6 className="text-center">
        {title}. {description}
      </TypographyH6>
      <NoRoadIcon className="h-32 w-32" />
    </div>
  );
};
