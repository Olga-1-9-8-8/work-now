import { zodResolver } from "@hookform/resolvers/zod";
import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { GenderType, UniversalItemType } from "../../../../shared/types";
import { Button } from "../../../../shared/ui/buttons/Button";
import { FormInputField, FormRadioGroup, FormSelect } from "../../../../shared/ui/form-control";
import { Form } from "../../../../shared/ui/form/Form";
import { createTitleValueArrayFromNumbersRange } from "../../../../shared/utils/helpers";
import { UpdateUserTypeProps } from "../../api/apiProfiles";
import { LkDetailsFormType } from "../../types/LkDetailsFormType";
import { lkDetailsFormValidationSchema } from "../../validation/lkDetailsFormValidationSchema";
import { LkDetailsFormAvatarBlock } from "./block/LkDetailsFormAvatarBlock";

interface LkDetailsFormProps {
  userName: string;
  gender?: GenderType;
  age?: string;
  avatar?: string;
  updateProfile: UseMutateFunction<
    {
      path: string;
    } | null,
    Error,
    UpdateUserTypeProps,
    unknown
  >;
  isUpdatingProfile: boolean;
}

export const LkDetailsForm = ({
  userName,
  gender,
  age,
  avatar,
  updateProfile,
  isUpdatingProfile,
}: LkDetailsFormProps) => {
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
    updateProfile(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <LkDetailsFormAvatarBlock avatar={avatar} updateProfile={updateProfile} />
        <FormInputField<LkDetailsFormType>
          label="Укажите имя"
          name="userName"
          placeholder="Имя"
          disabled={isUpdatingProfile}
        />
        <FormRadioGroup<LkDetailsFormType>
          label="Укажите пол"
          name="gender"
          disabled={isUpdatingProfile}
          options={[
            { value: "male", title: "Муж." },
            { value: "female", title: "Жен." },
          ]}
        />
        <FormSelect<LkDetailsFormType>
          label="Укажите возраст"
          title="Добавить возраст"
          disabled={isUpdatingProfile}
          name="age"
          options={
            createTitleValueArrayFromNumbersRange([14, 90]) as Required<UniversalItemType<string>>[]
          }
        />
        <Button size="lg" disabled={isUpdatingProfile} type="submit" className="w-full">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
