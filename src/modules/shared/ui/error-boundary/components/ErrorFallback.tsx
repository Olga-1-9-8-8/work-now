import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { Button } from "../../buttons/Button";
import { NotRight } from "../../icons";
import { PageContainer } from "../../layout";
import { TypographyH3 } from "../../typography/TypographyH3";

export const ErrorFallback = () => {
  const { t } = useLanguageSwitcher("shared");

  return (
    <PageContainer className="flex flex-col items-center justify-center gap-6">
      <NotRight className="h-96 w-96" />
      <TypographyH3 className="text-center">{t("shared.errorFallbackTitle")}</TypographyH3>
      <Button size="lg" onClick={() => window.location.replace("/")}>
        {t("shared.errorFallbackButtonTitle")}
      </Button>
    </PageContainer>
  );
};
