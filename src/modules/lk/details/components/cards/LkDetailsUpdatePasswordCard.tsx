import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { UseFormReset, useForm } from "react-hook-form";
import { AuthPasswordField } from "../../../../shared/services/auth";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Form } from "../../../../shared/ui/form/Form";
import { useLkDetailsContext } from "../../context";
import { LkDetailsUpdatePasswordFormType } from "../../types/LkDetailsUpdatePasswordFormType";
import { lkDetailsUpdatePasswordFormValidationSchema } from "../../validation/lkDetailsUpdatePasswordFormValidationSchema";
import { LkDetailsCard } from "../card/LkDetailsCard";

export const LkDetailsUpdatePasswordCard = () => {
  const { updateUser, isUpdatingUser } = useLkDetailsContext();

  const form = useForm<LkDetailsUpdatePasswordFormType>({
    resolver: zodResolver(lkDetailsUpdatePasswordFormValidationSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (
    data: LkDetailsUpdatePasswordFormType,
    reset: UseFormReset<LkDetailsUpdatePasswordFormType>,
  ) => {
    updateUser(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <LkDetailsCard title="Сброс пароля">
      <section className="flex flex-col gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => onSubmit(data, form.reset))}
            className="w-full space-y-6"
          >
            <AuthPasswordField<LkDetailsUpdatePasswordFormType>
              label="Укажите новый пароль"
              name="password"
              placeholder="Введите пароль"
              disabled={isUpdatingUser}
            />
            <AuthPasswordField<LkDetailsUpdatePasswordFormType>
              label="Подтвердите новый пароль"
              name="confirmPassword"
              placeholder="Подтвердите введенный пароль"
              disabled={isUpdatingUser}
            />
            <Button className="w-full" type="submit" disabled={isUpdatingUser}>
              <span className="relative pr-6">
                Обновить пароль
                {isUpdatingUser && (
                  <Loader2 className="absolute right-0 top-0 h-5 w-5 animate-spin text-primary-light" />
                )}
              </span>
            </Button>
          </form>
        </Form>
      </section>
    </LkDetailsCard>
  );
};
