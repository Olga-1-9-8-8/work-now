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
  return (
    <PageContainer>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Создай резюме</CardTitle>
          <CardDescription>Не забудь добавить фото к своему профилю.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResumeCreationForm />
        </CardContent>
      </Card>
    </PageContainer>
  );
};
