import { z } from "zod";
import { LanguageType } from "../../../configs";
import { emailSchema, getUserNameSchema, passwordSchema, phoneSchema } from "../../../validation";

export const getAuthSignUpFormValidationSchema = (language: LanguageType) =>
  z
    .object({
      username: getUserNameSchema(language),
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
