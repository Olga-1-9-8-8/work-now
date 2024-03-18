import { ReactNode } from "react";
import { PageContainer } from "../../../shared/ui/layout";

interface HomeCardProps {
  color: "secondary" | "background" | "primary-extraDark";
  children: ReactNode;
}

export const HomeCard = ({ color, children }: HomeCardProps) => {
  return (
    <section className={`bg-${color} text-center`}>
      <PageContainer className="pt-14">{children}</PageContainer>
    </section>
  );
};
