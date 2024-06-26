import { z } from "zod";
import { emailSchema, passwordSchema, phoneSchema, userNameSchema } from "../../../validation";

export const authSignUpFormValidationSchema = z
  .object({
    username: userNameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    phone: phoneSchema,
    isCompany: z.boolean().optional(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
