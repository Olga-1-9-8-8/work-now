import { Pagination } from "../../../shared/components/pagination";
import { UniversalCardItemType } from "../../../shared/types";
import { TypographyH3 } from "../../../shared/ui/typography/TypographyH3";
import { getRightNounWordDeclension } from "../../../shared/utils/helpers";
import { LkCard } from "../../shared/components";

interface LkFavoritesProps {
  count: number;
  favorites: UniversalCardItemType[];
}

export const LkFavorites = ({ favorites, count }: LkFavoritesProps) => {
  return (
    <div className="pb-4">
      <div className="py-4">
        <TypographyH3>
          У Вас в Избранном{" "}
          <strong className="text-primary-extraDark">
            {getRightNounWordDeclension(count, "элемент", ["", "а", "ов"])}
          </strong>
        </TypographyH3>
        <div className="my-4 flex flex-col gap-4">
          {favorites.map((data) => {
            return <LkCard key={data.id} data={data} title="Избранное" />;
          })}
        </div>
      </div>
      <Pagination totalCount={count} />
    </div>
  );
};
