import { ReactNode } from "react";
import { NoExistIcon } from "../../../ui/icons";
import { TypographyH4 } from "../../../ui/typography/TypographyH4";

interface NotExistProps {
  title: ReactNode;
}

export const NotExist = ({ title }: NotExistProps) => {
  return (
    <div className="flex flex-col items-center p-6">
      <TypographyH4 className="text-center">{title}</TypographyH4>
      <NoExistIcon className="max-h-96 max-w-96" />
    </div>
  );
};
