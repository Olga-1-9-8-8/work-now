import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { User } from "../../../../shared/components/user";
import { Button } from "../../../../shared/ui/buttons/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../shared/ui/form/Form";
import { InputWithLabel } from "../../../../shared/ui/inputs/InputWithLabel";
import { RadioGroup, RadioGroupItem } from "../../../../shared/ui/radio/RadioGroup";
import { LkDetailsFormType } from "../../types/LkDetailsFormType";
import { LkDetailsFormValidationSchema } from "../../validation/LkDetailsFormValidationSchema";
import { LkDetailsFormAvatarBlock } from "./block/LkDetailsFormAvatarBlock";

interface LkDetailsFormProps {
  user: Partial<User>;
}

export const LkDetailsForm = ({ user }: LkDetailsFormProps) => {
  const form = useForm<LkDetailsFormType>({
    resolver: zodResolver(LkDetailsFormValidationSchema),
    defaultValues: {
      userName: user.name || "",
      gender: user.gender || "",
      image: user.image || ({} as File),
    },
  });

  const onSubmit = (data: LkDetailsFormType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <LkDetailsFormAvatarBlock user={user} />
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormControl className="max-w-full">
                <InputWithLabel
                  label="Укажите имя"
                  placeholder="Имя"
                  autoCorrect="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Укажите пол</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0 ">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="text-lg">Муж.</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="text-lg">Жен.</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" type="submit" className="w-full">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
