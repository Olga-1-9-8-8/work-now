import { Outlet } from "react-router-dom";
import { PageContainer } from "../../../../shared/ui/layout";
import { LkProvider } from "./LkProvider";
import { LkLayoutNav } from "./nav/LkLayoutNav";

export const LkLayout = () => {
  return (
    <PageContainer>
      <LkProvider>
        <LkLayoutNav />
        <Outlet />
      </LkProvider>
    </PageContainer>
  );
};
