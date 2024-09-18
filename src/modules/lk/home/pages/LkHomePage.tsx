import { SeoMetadata } from "../../../shared/navigation";
import { LkHome } from "../components/LkHome";

export const LkHomePage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Личный кабинет"
        description="На странице личного кабинета WorkNow вы получите доступ ко всем функциям и настройкам вашего аккаунта"
      />
      <LkHome />;
    </>
  );
};
