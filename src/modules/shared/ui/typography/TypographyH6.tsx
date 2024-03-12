import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TypographyH6Props {
  children: ReactNode;
  className?: string;
}

export const TypographyH6 = ({ className, children }: TypographyH6Props) => {
  return (
    <h2 className={cn("scroll-m-20 text-base font-semibold tracking-tight", className)}>
      {children}
    </h2>
  );
};
