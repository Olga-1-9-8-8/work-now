import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FooterNavigation, Header } from "../../navigation";
import { useResponsiveContext } from "../../responsive";
import { Spinner } from "../spinner/Spinner";
import { AppLayoutFooter } from "./footer/AppLayoutFooter";
import { AppLayoutHeader } from "./header/AppLayoutHeader";

const AppLayout = () => {
  const isMobile = useResponsiveContext();
  return (
    <div className="overflow-x-hidden ">
      <div className="mr-[calc(-1*(100vw-100%))] grid min-h-dvh grid-rows-[auto_1fr_auto]">
        <AppLayoutHeader>
          <Header />
        </AppLayoutHeader>
        <div>
          <Suspense fallback={<Spinner />}>
            <main className={` ${isMobile ? "" : "mr-4"} h-full`}>
              <Outlet />
            </main>
          </Suspense>
        </div>
        <AppLayoutFooter>
          <FooterNavigation />
        </AppLayoutFooter>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default AppLayout;
