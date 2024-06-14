import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GenderType, UniversalItemType } from "../../../../shared/types";
import { Button } from "../../../../shared/ui/buttons/Button";
import { FormInputField, FormRadioGroup, FormSelect } from "../../../../shared/ui/form-control";
import { Form } from "../../../../shared/ui/form/Form";
import { createTitleValueArrayFromNumbersRange } from "../../../../shared/utils/helpers";
import { useLkDetailsContext } from "../../context";
import { LkDetailsFormType } from "../../types/LkDetailsFormType";
import { lkDetailsFormValidationSchema } from "../../validation/lkDetailsFormValidationSchema";
import { LkDetailsFormAvatarBlock } from "./block/LkDetailsFormAvatarBlock";

interface LkDetailsFormProps {
  userName: string;
  gender?: GenderType;
  age?: string;
  avatar?: string;
  onModalClose?: () => void;
}

export const LkDetailsForm = ({
  userName,
  gender,
  age,
  avatar,
  onModalClose,
}: LkDetailsFormProps) => {
  const { updateUser, isUpdatingUser } = useLkDetailsContext();

  const form = useForm<LkDetailsFormType>({
    resolver: zodResolver(lkDetailsFormValidationSchema),
    defaultValues: {
      userName,
      gender,
      avatar,
      age,
    },
  });

  const onSubmit = (data: LkDetailsFormType) => {
    updateUser(data);
    onModalClose?.();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <LkDetailsFormAvatarBlock avatarSrc={avatar} />
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
