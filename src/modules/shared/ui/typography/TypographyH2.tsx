import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TypographyH2Props {
  className?: string;
  children: ReactNode;
}

export const TypographyH2 = ({ className, children }: TypographyH2Props) => {
  return (
    <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight", className)}>
      {children}
    </h2>
  );
};
