import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useResponsiveContext } from "../../../responsive";
import { Button } from "../../../ui/buttons/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form/Form";
import { Input } from "../../../ui/inputs/Input";
import {
  InputOtp,
  InputOtpGroup,
  InputOtpSeparator,
  InputOtpSlot,
} from "../../../ui/inputs/InputOTP";
import { useLogin } from "../hooks/useLogin";
import { authFormValidationSchema } from "../validation/authFormValidationSchema";

export const AuthLoginForm = () => {
  const isMobile = useResponsiveContext();

  const form = useForm<z.infer<typeof authFormValidationSchema>>({
    resolver: zodResolver(authFormValidationSchema),
    defaultValues: {
      userName: "",
      email: "olga@example.com",
      password: "123456",
      phone: "",
    },
  });

  const { isLogin, login } = useLogin();

  function onSubmit(data: z.infer<typeof authFormValidationSchema>) {
    login({ email: data.email, password: data.password }, { onSettled: () => form.reset() });
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Укажите имя</FormLabel>
              <FormControl>
                <Input
                  placeholder="Имя"
                  autoComplete="username"
                  autoCorrect="off"
                  disabled={isLogin}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Укажите email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLogin}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Укажите пароль</FormLabel>
              <FormControl>
                <Input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="пароль"
                  autoCorrect="off"
                  autoComplete="password"
                  iconAfter={isPasswordVisible ? Eye : EyeOff}
                  onIconClick={() => setIsPasswordVisible((prev) => !prev)}
                  disabled={isLogin}
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
                <InputOtp maxLength={10} disabled={isLogin} {...field}>
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
        <Button className="w-full" type="submit" disabled={isLogin}>
          <span className="relative pr-6">
            Войти
            {isLogin ? (
              <Loader2 className="absolute right-0 top-0 h-5 w-5 animate-spin text-primary-light" />
            ) : (
              ""
            )}
          </span>
        </Button>
      </form>
    </Form>
  );
};
