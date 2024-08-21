import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NotExist } from "../../../shared/components/not-found";
import { useAuthContext } from "../../../shared/services/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../shared/ui/card/Card";
import { PageContainer } from "../../../shared/ui/layout";
import { VacancyCreationForm } from "../components/VacancyCreationForm";

const VacancyCreationPage = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user) {
    return <NotExist title="Чтобы создать вакансию, нужно войти в аккаунт" />;
  }

  return (
    <PageContainer>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Создайте вакансию</CardTitle>
          <CardDescription>Не забудьте добавить логотип к своему профилю.</CardDescription>
        </CardHeader>
        <CardContent>
          <VacancyCreationForm userId={user.id} />
        </CardContent>
      </Card>
    </PageContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default VacancyCreationPage;
