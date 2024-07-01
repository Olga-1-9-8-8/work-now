import { NotExist } from "../../../shared/components/not-found";
import { useFavorites } from "../../../shared/features/favorites/hooks/useFavorites";
import { NotFound } from "../../../shared/ui/icons";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { LkFavorites } from "../components/LkFavorites";

export const LkFavoritesPage = () => {
  const { favorites, isFavoritesLoading, totalFavoritesCount } = useFavorites();

  if (isFavoritesLoading) return <Spinner />;
  if (!favorites) return <NotFound title="Элементы в Избранном" />;

  return totalFavoritesCount ? (
    <LkFavorites count={totalFavoritesCount} favorites={favorites} />
  ) : (
    <NotExist title="Вы не добавили ни одного элемента в Избранное" />
  );
};
