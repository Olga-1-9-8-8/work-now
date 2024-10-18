import { Pagination } from "../../../shared/components/pagination";
import { UniversalCardItemType } from "../../../shared/types";
import { TypographyH4 } from "../../../shared/ui/typography/TypographyH4";
import { useLanguageSwitcher } from "../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkCard } from "../../shared/components";

interface LkFavoritesListProps {
  count: number;
  favorites: UniversalCardItemType[];
}

export const LkFavoritesList = ({ favorites, count }: LkFavoritesListProps) => {
  const { t } = useLanguageSwitcher("lk");
  return (
    <div className="pb-4">
      <div className="py-4">
        <TypographyH4>
          {t("lk.favorites.list.title")}{" "}
          <strong className="text-primary-extraDark">{t("lk.description", { count })}</strong>
        </TypographyH4>
        <div className="my-4 flex flex-col gap-4">
          {favorites.map((data) => {
            return <LkCard key={data.id} data={data} title={t("lk.favorites.title")} />;
          })}
        </div>
      </div>
      <Pagination totalCount={count} />
    </div>
  );
};
