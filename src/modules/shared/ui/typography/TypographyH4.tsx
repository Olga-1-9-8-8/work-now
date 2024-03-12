import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TypographyH4Props {
  className?: string;
  children: ReactNode;
}

export const TypographyH4 = ({ className, children }: TypographyH4Props) => {
  return (
    <h2 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h2>
  );
};
