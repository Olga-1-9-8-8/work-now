import { Outlet } from "react-router-dom";
import { FooterNavigation, HeaderNavigation } from "../../navigation";
import { AppLayoutFooter } from "./footer/AppLayoutFooter";
import { AppLayoutHeader } from "./header/AppLayoutHeader";

export const AppLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] overflow-x-hidden">
      <AppLayoutHeader>
        <HeaderNavigation />
      </AppLayoutHeader>
      <div>
        <main className="h-full ">
          <Outlet />
        </main>
      </div>
      <AppLayoutFooter>
        <FooterNavigation />
      </AppLayoutFooter>
    </div>
  );
};
