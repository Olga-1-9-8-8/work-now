import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthContext, useUpdateUser } from "../../../../shared/services/auth";
import { ProfileType } from "../../../../shared/services/auth/types/ProfileType";
import { UserEntity } from "../../../../shared/types";
import { Button } from "../../../../shared/ui/buttons/Button";
import { FormInputField, FormRadioGroup } from "../../../../shared/ui/form-control";
import { FormInputOptField } from "../../../../shared/ui/form-control/input/FormInputOptField";
import { Form } from "../../../../shared/ui/form/Form";
import { LkDetailsFormType } from "../../types/LkDetailsFormType";
import { getLkDetailsFormValidationSchema } from "../../validation/lkDetailsFormValidationSchema";
import { LkDetailsFormAvatarBlock } from "./block/LkDetailsFormAvatarBlock";

interface LkDetailsFormProps {
  profile: ProfileType;
  onModalClose?: () => void;
}

export const LkDetailsForm = ({ profile, onModalClose }: LkDetailsFormProps) => {
  const { updateUser, isUpdatingUser } = useUpdateUser();

  const { role } = useAuthContext();

  const form = useForm<LkDetailsFormType>({
    resolver: zodResolver(getLkDetailsFormValidationSchema(role)),
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
          label={`${role === UserEntity.Company ? "Укажите название компании" : "Укажите имя"}`}
          name="userName"
          placeholder="Имя"
          disabled={isUpdatingUser}
        />
        {role === UserEntity.Company ? (
          <FormInputField<LkDetailsFormType>
            type="number"
            label="Укажите сколько лет организация на рынке"
            name="age"
            placeholder="Количество лет вашей компании"
            disabled={isUpdatingUser}
          />
        ) : (
          <>
            <FormRadioGroup<LkDetailsFormType>
              label="Укажите пол"
              name="gender"
              disabled={isUpdatingUser}
              options={[
                { value: "male", title: "Муж." },
                { value: "female", title: "Жен." },
              ]}
            />
            <FormInputOptField label="Укажите свой возраст" name="age" maxLength={2} />
          </>
        )}
        <Button size="lg" disabled={isUpdatingUser} type="submit" className="w-full">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
