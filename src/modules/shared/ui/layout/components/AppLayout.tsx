import { Outlet } from "react-router-dom";
import { AppLayoutFooter } from "./footer/AppLayoutFooter";
import { AppLayoutHeader } from "./header/components/AppLayoutHeader";

export const AppLayout = () => {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <AppLayoutHeader />
      <div>
        <main className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
          <Outlet />
        </main>
      </div>
      <AppLayoutFooter />
    </div>
  );
};
