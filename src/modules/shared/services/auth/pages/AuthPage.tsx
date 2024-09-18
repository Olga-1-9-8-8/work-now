import { SeoMetadata } from "../../../navigation";
import { Auth } from "../components/Auth";

const AuthPage = () => {
  return (
    <>
      <SeoMetadata
        title="WorkNow / Авторизация"
        description=" На странице авторизации WorkNow вы можете легко и безопасно войти в свой аккаунт"
      />
      <Auth />;
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthPage;
