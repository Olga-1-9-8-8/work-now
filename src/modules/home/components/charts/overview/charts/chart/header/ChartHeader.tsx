import { ElementType, ReactNode } from "react";
import { TypographyH6 } from "../../../../../../../shared/ui/typography/TypographyH6";

interface ChartHeaderProps {
  title: ReactNode;
  description?: string;
  icon?: ElementType;
}

export const ChartHeader = ({ title, description, icon: Icon }: ChartHeaderProps) => (
  <div className="mx-4 mt-4 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-none  text-primary-extraDark md:flex-row">
    {Icon && (
      <div className="w-max rounded-full bg-primary-extraDark p-5 text-white">
        <Icon />
      </div>
    )}
    <div>
      <TypographyH6>{title}</TypographyH6>
      {description && (
        <p className="max-w-xl text-sm font-normal leading-normal text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  </div>
);
