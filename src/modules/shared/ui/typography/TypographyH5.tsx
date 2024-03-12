import { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface TypographyH5Props {
  children: ReactNode;
  className?: string;
}

export const TypographyH5 = ({ className, children }: TypographyH5Props) => {
  return (
    <h2 className={cn("scroll-m-20 text-lg font-semibold tracking-tight", className)}>
      {children}
    </h2>
  );
};
