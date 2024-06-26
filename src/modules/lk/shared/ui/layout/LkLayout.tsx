import { Outlet } from "react-router-dom";
import { PageContainer } from "../../../../shared/ui/layout";
import { LkLayoutNav } from "./nav/LkLayoutNav";

export const LkLayout = () => {
  return (
    <PageContainer>
      <LkLayoutNav />
      <Outlet />
    </PageContainer>
  );
};
