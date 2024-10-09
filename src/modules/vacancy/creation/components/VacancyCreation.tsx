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
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { VacancyCreationForm } from "./VacancyCreationForm";

export const VacancyCreation = () => {
  const { t } = useLanguageSwitcher("vacancy");
  const { user, isUserLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isUserLoading) {
      navigate("/login");
    }
  }, [isUserLoading, navigate, user]);

  if (isUserLoading) return <Spinner />;

  if (!user) {
    return <NotExist title={t("vacancy.creation.notExist")} />;
  }

  return (
    <PageContainer>
      <BackButton />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{t("vacancy.creation.title")}</CardTitle>
          <CardDescription>{t("vacancy.creation.description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <VacancyCreationForm userId={user.id} />
        </CardContent>
      </Card>
    </PageContainer>
  );
};
