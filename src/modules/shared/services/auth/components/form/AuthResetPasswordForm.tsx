import { useCallback, useState } from "react";
import { UseFormReset } from "react-hook-form";
import { TypographyH6 } from "../../../../ui/typography/TypographyH6";
import { useResetPassword } from "../../hooks/useResetPassword";
import { ResetPasswordFormType } from "../../types/form/ResetPasswordFormType";
import { authResetPasswordFormValidationSchema } from "../../validation/authResetPasswordFormValidationSchema";
import { AuthFormWrapper } from "./AuthFormWrapper";
import { AuthEmailField } from "./item/AuthEmailField";

export const AuthResetPasswordForm = () => {
  const { isResetPasswordPending, resetPassword } = useResetPassword();

  const [isSendMail, setIsSendMail] = useState(false);

  const onSubmit = useCallback(
    (data: ResetPasswordFormType, reset: UseFormReset<ResetPasswordFormType>) => {
      resetPassword(data, { onSuccess: () => setIsSendMail(true), onSettled: () => reset() });
    },
    [resetPassword],
  );

  if (isSendMail) {
    return (
      <div className="flex flex-col gap-4">
        <TypographyH6 className="text-success">
          На вашу почту выслано письмо для восстановления пароля.
        </TypographyH6>
      </div>
    );
  }

  return (
    <AuthFormWrapper<ResetPasswordFormType>
      title="Сбросить пароль"
      schema={authResetPasswordFormValidationSchema}
      onSubmit={onSubmit}
      isLoading={isResetPasswordPending}
    >
      <AuthEmailField<ResetPasswordFormType>
        label="Укажите email для сброса пароля"
        name="email"
        placeholder="Email"
        disabled={isResetPasswordPending}
      />
    </AuthFormWrapper>
  );
};
