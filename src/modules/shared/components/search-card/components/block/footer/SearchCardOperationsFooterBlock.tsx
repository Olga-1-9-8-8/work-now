import { useAddFavorite } from "../../../../../../lk/favorites/hooks/useAddFavorite";
import { useDeleteFavorite } from "../../../../../../lk/favorites/hooks/useDeleteFavorite.";
import { CardFooter } from "../../../../../ui/card/Card";
import { AppliedButton, FavoriteButton } from "../../../../buttons";
import { CardSocialsButtons } from "../../../../card";

interface SearchCardOperationsFooterBlockProps<T extends number | string> {
  id: T;
  phone?: string;
  userId?: number;
}

export const SearchCardOperationsFooterBlock = <T extends number | string>({
  id,
  userId,
  phone,
}: SearchCardOperationsFooterBlockProps<T>) => {
  const { addFavorite, isFavoriteAdding } = useAddFavorite(userId, id as number);
  const { deleteFavorite, isFavoriteDeleting } = useDeleteFavorite();

  const handleAppliedClick = (isApplied: boolean) => {
    console.log(id, isApplied);
  };

  const handleFavoriteClick = (isFavorite: boolean) => {
    if (isFavorite) {
      addFavorite();
    } else {
      deleteFavorite(id as number);
    }
  };
  return (
    <CardFooter className="flex flex-col-reverse justify-between gap-5 lg:flex-row">
      <div className="flex w-full flex-col gap-5 sm:flex-row">
        <AppliedButton onClick={handleAppliedClick} />
        <FavoriteButton
          onClick={handleFavoriteClick}
          withTitle
          disabled={isFavoriteAdding || isFavoriteDeleting}
        />
      </div>
      <CardSocialsButtons phone={phone} />
    </CardFooter>
  );
};
