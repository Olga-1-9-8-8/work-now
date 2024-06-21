import { z } from "zod";
import { passwordSchema } from "../../../validation";

export const authUpdatePasswordFormValidationSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
