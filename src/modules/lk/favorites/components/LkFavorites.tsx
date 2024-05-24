import { NotFound } from "../../../shared/components/not-found/components";
import { NotExist } from "../../../shared/components/not-found/components/NotExist";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { getRightNounWordDeclension } from "../../../shared/utils/helpers";
import { useFavorites } from "../hooks/useFavorites";
import { LkFavoritesItem } from "./item/LkFavoritesItem";

export const LkFavorites = () => {
  // TODO: получить userId
  const userId = 5;
  const { isLoading, favorites, totalCount } = useFavorites(userId);

  if (isLoading) return <Spinner />;
  if (!favorites) return <NotFound title="Элементы в Избранном" />;
  return totalCount ? (
    <div className="py-4">
      <TypographyH3>
        У Вас в Избранном{" "}
        <strong className="text-primary-extraDark">
          {getRightNounWordDeclension(totalCount, "элемент", ["", "а", "ов"])}
        </strong>{" "}
      </TypographyH3>
      <div className="my-4 flex flex-col gap-4">
        {favorites.map((item) => (
          <LkFavoritesItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <NotExist title="Вы не добавили ни одного элемента в Избранное" />
  );
};
