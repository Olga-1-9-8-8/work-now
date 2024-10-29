import { Outlet } from "react-router-dom";
import { BackButton } from "../../../shared/components/buttons";
import { Card } from "../../../shared/ui/card/Card";
import { PageContainer } from "../../../shared/ui/layout";

export const AuthLayout = () => {
  return (
    <PageContainer>
      <BackButton />
      <div className="flex justify-center">
        <Card className="my-8 flex w-full flex-col gap-8 p-4 sm:w-[452px] md:mt-14 md:w-[530px] md:p-8 lg:w-[552px]">
          <Outlet />
        </Card>
      </div>
    </PageContainer>
  );
};
