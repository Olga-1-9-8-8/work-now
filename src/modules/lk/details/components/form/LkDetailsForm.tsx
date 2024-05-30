import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User } from "../../../../shared/components/user";
import { useUpdateUser } from "../../../../shared/services/auth/hooks/useUpdateUser";
import { UniversalItemType } from "../../../../shared/types";
import { Button } from "../../../../shared/ui/buttons/Button";
import { FormInputField, FormRadioGroup, FormSelect } from "../../../../shared/ui/form-control";
import { Form } from "../../../../shared/ui/form/Form";
import { createTitleValueArrayFromNumbersRange } from "../../../../shared/utils/helpers";
import { LkDetailsFormType } from "../../types/LkDetailsFormType";
import { lkDetailsFormValidationSchema } from "../../validation/lkDetailsFormValidationSchema";
import { LkDetailsFormAvatarBlock } from "./block/LkDetailsFormAvatarBlock";

interface LkDetailsFormProps {
  user: User;
}

export const LkDetailsForm = ({ user }: LkDetailsFormProps) => {
  const { isUpdatingUser, updateUser } = useUpdateUser();

  const form = useForm<LkDetailsFormType>({
    resolver: zodResolver(lkDetailsFormValidationSchema),
    defaultValues: {
      userName: user.userName || "",
      gender: user.gender,
      avatar: user.avatar,
      age: user.age,
    },
  });

  const onSubmit = (data: LkDetailsFormType) => {
    updateUser(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <LkDetailsFormAvatarBlock user={user} />
        <FormInputField<LkDetailsFormType>
          label="Укажите имя"
          name="userName"
          placeholder="Имя"
          disabled={isUpdatingUser}
        />
        <FormRadioGroup<LkDetailsFormType>
          label="Укажите пол"
          name="gender"
          disabled={isUpdatingUser}
          options={[
            { value: "male", title: "Муж." },
            { value: "female", title: "Жен." },
          ]}
        />
        <FormSelect<LkDetailsFormType>
          label="Укажите возраст"
          title="Добавить возраст"
          disabled={isUpdatingUser}
          name="age"
          options={
            createTitleValueArrayFromNumbersRange([14, 90]) as Required<UniversalItemType<string>>[]
          }
        />
        <Button size="lg" disabled={isUpdatingUser} type="submit" className="w-full">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
