import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { useResponsiveContext } from "../../../responsive";
import { Button } from "../../../ui/buttons/Button";
import { Card, CardTitle } from "../../../ui/card/Card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form/Form";
import {
  InputOtp,
  InputOtpGroup,
  InputOtpSeparator,
  InputOtpSlot,
} from "../../../ui/inputs/InputOTP";
import { InputWithLabel } from "../../../ui/inputs/InputWithLabel";
import { PageContainer } from "../../../ui/layout";
import { TypographyH3 } from "../../../ui/typography/TypographyH3";

const FormSchema = z.object({
  phone: z.string().min(9, {
    message: "Должно быть не менее 9 цифр.",
  }),
  userName: z
    .string({
      required_error: "Введите имя пользователя",
    })
    .min(2, {
      message: "Имя пользователя должно содержать хотя бы 2 буквы",
    })
    .max(50, "Имя пользователя должно содержать максимум 50 букв"),
  age: z.number().positive().optional(),
});

export const AuthLoginPage = () => {
  const navigate = useNavigate();
  const isMobile = useResponsiveContext();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      userName: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    navigate("/");
    toast.success(`${data.userName},вы успешно вошли в свой аккаунт`);
  }

  return (
    <PageContainer className="flex justify-center">
      <Card className="mt-20 flex h-[400px] w-[452px] flex-col gap-8 p-4 md:w-[530px] md:p-8 lg:w-[552px]">
        <CardTitle className="flex justify-center">
          <TypographyH3>Войдите в Личный кабинет</TypographyH3>
        </CardTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Укажите номер телефона</FormLabel>
                  <FormControl>
                    <InputOtp maxLength={10} {...field} className="">
                      <InputOtpGroup>
                        <InputOtpSlot index={0} />
                        <InputOtpSlot index={1} />
                        <InputOtpSlot index={2} />
                      </InputOtpGroup>
                      {!isMobile && <InputOtpSeparator />}
                      <InputOtpGroup>
                        <InputOtpSlot index={3} />
                        <InputOtpSlot index={4} />
                        <InputOtpSlot index={5} />
                      </InputOtpGroup>
                      {!isMobile && <InputOtpSeparator />}
                      <InputOtpGroup>
                        <InputOtpSlot index={6} />
                        <InputOtpSlot index={7} />
                        <InputOtpSlot index={8} />
                        <InputOtpSlot index={9} />
                      </InputOtpGroup>
                    </InputOtp>
                  </FormControl>
                  <FormDescription>Вам будет выслан пароль на телефон.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Войти
            </Button>
          </form>
        </Form>
      </Card>
    </PageContainer>
  );
};

// eslint-disable-next-line import/no-default-export
export default AuthLoginPage;
