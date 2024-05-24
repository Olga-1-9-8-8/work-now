import { Card } from "../../../ui/card/Card";
import { PageContainer } from "../../../ui/layout";
import { TypographyH3 } from "../../../ui/typography/TypographyH3";
import { AuthLoginForm } from "../components/AuthLoginForm";

export const AuthLoginPage = () => {
  return (
    <PageContainer className="flex justify-center">
      <Card className="my-8 flex w-[452px] flex-col gap-8 p-4 md:mt-20 md:w-[530px] md:p-8 lg:w-[552px]">
        <div className="flex justify-center">
          <TypographyH3>Войдите в Личный кабинет</TypographyH3>
        </div>
        <AuthLoginForm />
      </Card>
    </PageContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthLoginPage;
