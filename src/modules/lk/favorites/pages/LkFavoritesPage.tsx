import { SeoMetadata } from "../../../shared/navigation";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher";
import { LkFavorites } from "../components/LkFavorites";

const LkFavoritesPage = () => {
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

// eslint-disable-next-line import/no-default-export
export default LkFavoritesPage;
