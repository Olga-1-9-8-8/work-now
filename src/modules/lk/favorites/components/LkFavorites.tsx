import { NotExist, NotFound } from "../../../shared/components/not-found";
import { useFavorites } from "../../../shared/features/favorites/hooks/useFavorites";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { LkFavoritesList } from "./LkFavoritesList";

export const LkFavorites = () => {
  const { favorites, isFavoritesLoading, totalFavoritesCount } = useFavorites();

  if (isFavoritesLoading) return <Spinner />;
  if (!favorites) return <NotFound title="Элементы в Избранном" />;

  return totalFavoritesCount ? (
    <LkFavoritesList count={totalFavoritesCount} favorites={favorites} />
  ) : (
    <NotExist title="Вы не добавили ни одного элемента в Избранное" />
  );
};
