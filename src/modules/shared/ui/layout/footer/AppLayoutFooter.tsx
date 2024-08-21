import { ReactNode } from "react";
import { PageContainer } from "../components/containers/PageContainer";

interface AppLayoutFooterProps {
  children: ReactNode;
}

export const AppLayoutFooter = ({ children }: AppLayoutFooterProps) => {
  return (
    <footer className="w-full bg-primary-dark">
      <PageContainer>{children}</PageContainer>
    </footer>
  );
};
