import { SeoMetadata } from "../../shared/navigation";
import { useLanguageSwitcher } from "../../shared/widgets/languages-switcher";
import { Home } from "../components/Home";

export const HomePage = () => {
  const { t } = useLanguageSwitcher("seo");

  return (
    <>
      <SeoMetadata title="Work Now" description={t("seo.homePage.description")} />
      <Home />
    </>
  );
};
