import { Button } from "../../buttons/Button";
import { NotRight } from "../../icons";
import { PageContainer } from "../../layout";
import { TypographyH3 } from "../../typography/TypographyH3";

export const ErrorFallback = () => {
  return (
    <PageContainer className="flex  flex-col items-center justify-center gap-6">
      <NotRight className="h-96 w-96" />
      <TypographyH3>Что то пошло совсем не так</TypographyH3>
      <Button size="lg" onClick={() => window.location.replace("/")}>
        Вернуться на главную страницу
      </Button>
    </PageContainer>
  );
};
