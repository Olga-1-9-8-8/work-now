import { z } from "zod";
import { emailSchema, passwordSchema, phoneSchema, userNameSchema } from "../../../validation";

export const authSignUpFormValidationSchema = z
  .object({
    userName: userNameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    phone: phoneSchema,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
