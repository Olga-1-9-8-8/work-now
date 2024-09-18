import { SeoMetadata } from "../../../navigation";
import { AuthReset } from "../components/AuthReset";

const AuthResetPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Восстановление пароля"
        description=" На странице восстановления пароля WorkNow вы можете быстро и безопасно восстановить доступ к своему аккаунту"
      />
      <AuthReset />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthResetPage;
