import { NotExist, NotFound } from "../../../shared/components/not-found";
import { useFavorites } from "../../../shared/features/favorites/hooks/useFavorites";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkFavoritesList } from "./LkFavoritesList";

export const LkFavorites = () => {
  const { favorites, isFavoritesLoading, totalFavoritesCount } = useFavorites();
  const { t } = useLanguageSwitcher("lk");

  if (isFavoritesLoading) return <Spinner />;
  if (!favorites) return <NotFound title={t("lk.favorites.list.notFoundTitle")} />;

  return totalFavoritesCount ? (
    <LkFavoritesList count={totalFavoritesCount} favorites={favorites} />
  ) : (
    <NotExist title={t("lk.favorites.list.notExistTitle")} />
  );
};
