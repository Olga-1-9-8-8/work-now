import { NotFound } from "../../../shared/components/not-found";
import { NotExist } from "../../../shared/components/not-found/components/NotExist";
import { Spinner } from "../../../shared/ui/spinner/Spinner";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { getRightNounWordDeclension } from "../../../shared/utils/helpers";
import { useProfileFavorites } from "../../shared/hooks/useProfileFavorites";
import { LkFavoritesItem } from "./item/LkFavoritesItem";

export const LkFavorites = () => {
  const { profileFavorites, isProfileFavoritesLoading, totalProfileFavoritesCount } =
    useProfileFavorites();

  if (isProfileFavoritesLoading) return <Spinner />;
  if (!profileFavorites) return <NotFound title="Элементы в Избранном" />;
  return totalProfileFavoritesCount ? (
    <div className="py-4">
      <TypographyH3>
        У Вас в Избранном{" "}
        <strong className="text-primary-extraDark">
          {getRightNounWordDeclension(totalProfileFavoritesCount, "элемент", ["", "а", "ов"])}
        </strong>
      </TypographyH3>
      <div className="my-4 flex flex-col gap-4">
        {profileFavorites.map((item) => (
          <LkFavoritesItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <NotExist title="Вы не добавили ни одного элемента в Избранное" />
  );
};
