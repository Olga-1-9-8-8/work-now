import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkFavorites } from "../components/LkFavorites";

export const LkFavoritesPage = () => {
  const { t } = useLanguageSwitcher("seo");
  return (
    <>
      <SeoMetadata
        title={t("seo.lkFavoritesPage.title")}
        description={t("seo.lkFavoritesPage.description")}
      />
      <LkFavorites />
    </>
  );
};
