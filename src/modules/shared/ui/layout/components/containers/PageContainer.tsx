import { ReactNode } from "react";
import { cn } from "../../../../utils/cn";

interface PageContainerProps {
  className?: any;
  children: ReactNode;
}

export const PageContainer = ({ className, children }: PageContainerProps) => {
  return <div className={cn("mx-auto max-w-8xl px-4 sm:px-6 md:px-8", className)}>{children}</div>;
};
