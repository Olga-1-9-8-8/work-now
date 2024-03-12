import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TypographyH3Props {
  className?: string;
  children: ReactNode;
}

export const TypographyH3 = ({ className, children }: TypographyH3Props) => {
  return (
    <h2 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h2>
  );
};
