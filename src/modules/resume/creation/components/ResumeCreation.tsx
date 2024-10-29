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
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { ResumeCreationForm } from "./ResumeCreationForm";

export const ResumeCreation = () => {
  const { t } = useLanguageSwitcher("resume");
  const { user, isUserLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isUserLoading) {
      navigate("/login");
    }
  }, [isUserLoading, navigate, user]);
  if (isUserLoading) return <Spinner />;

  if (!user) {
    return <NotExist title={t("resume.creation.notExist")} />;
  }

  return (
    <PageContainer>
      <BackButton />
      <Card className="my-6">
        <CardHeader>
          <CardTitle>{t("resume.creation.title")}</CardTitle>
          <CardDescription>{t("resume.creation.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ResumeCreationForm userId={user.id} />
        </CardContent>
      </Card>
    </PageContainer>
  );
};
