import { Card } from "../../../ui/card/Card";
import { PageContainer } from "../../../ui/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../ui/tabs/Tabs";
import { AuthLoginForm } from "../components/form/AuthLoginForm";
import { AuthSignUpForm } from "../components/form/AuthSignUpForm";

const AuthPage = () => {
  return (
    <PageContainer className="flex justify-center">
      <Card className="my-8 flex w-[452px] flex-col gap-8 p-4 md:mt-20 md:w-[530px] md:p-8 lg:w-[552px]">
        <Tabs defaultValue="login" className="space-y-4">
          <TabsList className="flex w-full">
            <TabsTrigger className="grow font-bold" value="login">
              Войти в Личный кабинет
            </TabsTrigger>
            <TabsTrigger className="grow font-bold" value="singUp">
              Зарегистрироваться
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <AuthLoginForm />
          </TabsContent>
          <TabsContent value="singUp">
            <AuthSignUpForm />
          </TabsContent>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthPage;
