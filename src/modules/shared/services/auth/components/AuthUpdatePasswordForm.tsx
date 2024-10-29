import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthFormWrapper } from "../../../../auth/shared/components/AuthFormWrapper";
import { AuthPasswordField } from "../../../../auth/shared/components/items/AuthPasswordField";
import { UpdatePasswordFormType } from "../../../../auth/update/types/UpdatePasswordFormType";
import { getAuthUpdatePasswordFormValidationSchema } from "../../../../auth/update/validation/getAuthUpdatePasswordFormValidationSchema";
import { LanguageType } from "../../../configs";
import { useLanguageSwitcher } from "../../../widgets/languages-switcher";
import { useUpdateUser } from "../hooks/useUpdateUser";

export const AuthUpdatePasswordForm = () => {
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const { t, language } = useLanguageSwitcher("login");

  const navigate = useNavigate();

  const authUpdatePasswordFormValidationSchema = getAuthUpdatePasswordFormValidationSchema(
    language as LanguageType,
  );

  const onSubmit = (data: UpdatePasswordFormType, reset: UseFormReset<UpdatePasswordFormType>) => {
    updateUser(data, {
      onSuccess: () => {
        reset();
        navigate("/lk/details");
      },
    });
  };

  return (
    <AuthFormWrapper<UpdatePasswordFormType>
      title={t("login.login.update.title")}
      schema={authUpdatePasswordFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isUpdatingUser}
    >
      <AuthPasswordField<UpdatePasswordFormType>
        label={t("login.login.update.password.label")}
        name="password"
        placeholder={t("login.login.update.password.placeholder")}
        disabled={isUpdatingUser}
      />
      <AuthPasswordField<UpdatePasswordFormType>
        label={t("login.login.update.confirmPassword.label")}
        name="confirmPassword"
        placeholder={t("login.login.update.confirmPassword.placeholder")}
        disabled={isUpdatingUser}
      />
    </AuthFormWrapper>
  );
};
