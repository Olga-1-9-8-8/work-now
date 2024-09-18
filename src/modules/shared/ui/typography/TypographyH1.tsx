import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TypographyH1Props {
  className?: string;
  children: ReactNode;
}

export const TypographyH1 = ({ className, children }: TypographyH1Props) => {
  return (
    <h1 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight", className)}>
      {children}
    </h1>
  );
};
