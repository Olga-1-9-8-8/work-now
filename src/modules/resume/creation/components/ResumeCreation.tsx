import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../../shared/components/buttons";
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
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { ResumeCreationForm } from "./ResumeCreationForm";

export const ResumeCreation = () => {
  const { user, isUserLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isUserLoading) {
      navigate("/login");
    }
  }, [isUserLoading, navigate, user]);
  if (isUserLoading) return <Spinner />;

  if (!user) {
    return <NotExist title="Чтобы создать резюме, нужно войти в аккаунт" />;
  }

  return (
    <PageContainer>
      <BackButton />
      <Card className="my-6">
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
