import { SeoMetadata } from "../../../shared/navigation";
import { LkFavorites } from "../components/LkFavorites";

export const LkFavoritesPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Мое избранное"
        description="На странице моего избранного WorkNow вы можете легко управлять сохраненными элементами (резюме / вакансиями) и получать доступ к ним в любое время"
      />
      <LkFavorites />
    </>
  );
};
