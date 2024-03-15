import { ReactNode } from "react";
import { PageContainer } from "../components/containers/PageContainer";

interface AppLayoutHeaderProps {
  children: ReactNode;
}

export const AppLayoutHeader = ({ children }: AppLayoutHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary-dark">
      <PageContainer>{children}</PageContainer>
    </header>
  );
};
