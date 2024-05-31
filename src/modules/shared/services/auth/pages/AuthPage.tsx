import { useLocation } from "react-router-dom";
import { Tabs } from "../../../components/tabs";
import { Card } from "../../../ui/card/Card";
import { PageContainer } from "../../../ui/layout";
import { AuthLoginForm } from "../components/form/AuthLoginForm";
import { AuthSignUpForm } from "../components/form/AuthSignUpForm";

const AuthPage = () => {
  const { state } = useLocation();

  return (
    <PageContainer className="flex justify-center">
      <Card className="my-8 flex w-[452px] flex-col gap-8 p-4 md:mt-14 md:w-[530px] md:p-8 lg:w-[552px]">
        <Tabs
          tabs={[
            {
              value: "login",
              title: "Войти в Личный кабинет",
              content: <AuthLoginForm />,
            },
            { value: "singUp", title: "Зарегистрироваться", content: <AuthSignUpForm /> },
          ]}
          defaultValue={state?.tab ?? "login"}
          isFullWidth
        />
      </Card>
    </PageContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthPage;
