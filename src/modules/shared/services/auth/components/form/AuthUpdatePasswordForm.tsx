import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import { UpdatePasswordFormType } from "../../types/form/UpdatePasswordFormType";
import { authUpdatePasswordFormValidationSchema } from "../../validation/authUpdatePasswordFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthPasswordField } from "./item/AuthPasswordField";

export const AuthUpdatePasswordForm = () => {
  const { updateUser, isUpdatingUser } = useUpdateUser();

  const navigate = useNavigate();

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
      title="Обновить пароль"
      schema={authUpdatePasswordFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isUpdatingUser}
    >
      <AuthPasswordField<UpdatePasswordFormType>
        label="Укажите новый пароль"
        name="password"
        placeholder="Введите пароль"
        disabled={isUpdatingUser}
      />
      <AuthPasswordField<UpdatePasswordFormType>
        label="Подтвердите новый пароль"
        name="confirmPassword"
        placeholder="Подтвердите введенный пароль"
        disabled={isUpdatingUser}
      />
    </AuthFormWrapper>
  );
};
