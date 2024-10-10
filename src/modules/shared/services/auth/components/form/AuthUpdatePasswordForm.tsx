import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LanguageType } from "../../../../configs";
import { useLanguageSwitcher } from "../../../../widgets/languages-switcher/hooks/useLanguageSwitcher";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { UpdatePasswordFormType } from "../../types/form/UpdatePasswordFormType";
import { getAuthUpdatePasswordFormValidationSchema } from "../../validation/getAuthUpdatePasswordFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthPasswordField } from "./item/AuthPasswordField";

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
