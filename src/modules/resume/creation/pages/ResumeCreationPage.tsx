import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NotExist } from "../../../shared/components/not-found/components";
import { useAuthContext } from "../../../shared/services/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../shared/ui/card/Card";
import { PageContainer } from "../../../shared/ui/layout";
import { ResumeCreationForm } from "../components/ResumeCreationForm";

export const ResumeCreationPage = () => {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user) {
    return <NotExist title="Чтобы создать резюме, нужно войти в аккаунт" />;
  }

  return (
    <PageContainer>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Создай резюме</CardTitle>
          <CardDescription>Не забудь добавить фото к своему профилю.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResumeCreationForm userId={user.id} />
        </CardContent>
      </Card>
    </PageContainer>
  );
};