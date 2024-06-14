import { z } from "zod";
import { passwordSchema } from "../../../shared/validation";

export const lkDetailsUpdatePasswordFormValidationSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
