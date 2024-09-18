import { SeoMetadata } from "../../../navigation";
import { AuthUpdatePassword } from "../components/AuthUpdatePassword";

const AuthUpdatePasswordPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Изменение пароля"
        description="На странице изменения пароля WorkNow вы можете легко и безопасно обновить свой пароль для доступа к аккаунту"
      />
      <AuthUpdatePassword />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthUpdatePasswordPage;
