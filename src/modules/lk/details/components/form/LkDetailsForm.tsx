import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LanguageType } from "../../../../shared/configs";
import { useAuthContext, useUpdateUser } from "../../../../shared/services/auth";
import { ProfileType } from "../../../../shared/services/auth/types/ProfileType";
import { UserEntity, getGenderTitle } from "../../../../shared/types";
import { Button } from "../../../../shared/ui/buttons/Button";
import { FormInputField, FormRadioGroup } from "../../../../shared/ui/form-control";
import { FormInputOptField } from "../../../../shared/ui/form-control/input/FormInputOptField";
import { Form } from "../../../../shared/ui/form/Form";
import { useLanguageSwitcher } from "../../../../shared/widgets/languages-switcher/hooks/useLanguageSwitcher";
import { LkDetailsFormType } from "../../types/LkDetailsFormType";
import { getLkDetailsFormValidationSchema } from "../../validation/lkDetailsFormValidationSchema";
import { LkDetailsFormAvatarBlock } from "./block/LkDetailsFormAvatarBlock";

interface LkDetailsFormProps {
  profile: ProfileType;
  onModalClose?: () => void;
}

export const LkDetailsForm = ({ profile, onModalClose }: LkDetailsFormProps) => {
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const { t, language } = useLanguageSwitcher("lk");

  const { role } = useAuthContext();

  const form = useForm<LkDetailsFormType>({
    resolver: zodResolver(getLkDetailsFormValidationSchema(role, language as LanguageType)),
    defaultValues: {
      userName: profile.userName,
      gender: profile.gender,
      avatar: profile.avatar,
      age: profile.age,
    },
  });

  const onSubmit = (data: LkDetailsFormType) => {
    updateUser(data);
    onModalClose?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <LkDetailsFormAvatarBlock avatarSrc={profile.avatar} role={role} />
        <FormInputField<LkDetailsFormType>
          label={`${role === UserEntity.Company ? t("lk.details.form.companyName") : t("lk.details.form.name")}`}
          name="userName"
          placeholder={t("lk.details.form.namePlaceholder")}
          disabled={isUpdatingUser}
        />
        {role === UserEntity.Company ? (
          <FormInputField<LkDetailsFormType>
            type="number"
            label={t("lk.details.form.ageLabel")}
            name="age"
            placeholder={t("lk.details.form.agePlaceholder")}
            disabled={isUpdatingUser}
          />
        ) : (
          <>
            <FormRadioGroup<LkDetailsFormType>
              label={t("lk.details.form.genderLabel")}
              name="gender"
              disabled={isUpdatingUser}
              options={[
                { value: "male", title: getGenderTitle("male", language as LanguageType) },
                { value: "female", title: getGenderTitle("female", language as LanguageType) },
              ]}
            />
            <FormInputOptField label={t("lk.details.form.age")} name="age" maxLength={2} />
          </>
        )}
        <Button size="lg" disabled={isUpdatingUser} type="submit" className="w-full">
          {t("lk.details.form.saveButtonTitle")}
        </Button>
      </form>
    </Form>
  );
};
