import { SeoMetadata } from "../navigation";
import { NotFound } from "../ui/icons";
import { TypographyH5 } from "../ui/typography/TypographyH5";
import { useLanguageSwitcher } from "../widgets/languages-switcher/hooks/useLanguageSwitcher";

export const PageNotFound = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata title="WorkNow / 404" description={t("seo.pageNotFound.description")} />
      <div className="flex flex-col items-center gap-6 p-6">
        <NotFound className="h-80 w-80" />
        <TypographyH5 className="text-center"> {t("seo.pageNotFound.title")}</TypographyH5>
      </div>
    </>
  );
};
