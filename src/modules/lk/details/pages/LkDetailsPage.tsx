import { SeoMetadata } from "../../../shared/navigation";
import { LkDetails } from "../components/LkDetails";

export const LkDetailsPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Мой профиль"
        description="На странице моего профиля WorkNow вы можете управлять своей личной информацией и настраивать параметры аккаунта."
      />
      <LkDetails />;
    </>
  );
};
