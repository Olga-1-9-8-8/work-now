import { Outlet } from "react-router-dom";
import { PageContainer } from "../../../../shared/ui/layout";
import { LkCountsProvider } from "../../context/LkCountsProvider";
import { LkLayoutNav } from "./nav/LkLayoutNav";

export const LkLayout = () => {
  return (
    <PageContainer>
      <LkCountsProvider>
        <LkLayoutNav />
        <Outlet />
      </LkCountsProvider>
    </PageContainer>
  );
};
