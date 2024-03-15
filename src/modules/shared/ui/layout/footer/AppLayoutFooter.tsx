import { ReactNode } from "react";

interface AppLayoutFooterProps {
  children: ReactNode;
}

export const AppLayoutFooter = ({ children }: AppLayoutFooterProps) => {
  return (
    <footer className="w-full bg-primary-dark">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">{children}</div>
    </footer>
  );
};
