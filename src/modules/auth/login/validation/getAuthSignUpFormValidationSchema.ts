import { z } from "zod";
import { LanguageType } from "../../../shared/configs";
import {
  getEmailSchema,
  getPasswordSchema,
  getPhoneSchema,
  getUserNameSchema,
} from "../../../shared/validation";

const sungUpErrorMessages = {
  noMatchPassword: {
    ru: "Пароли не совпадают",
    en: "Passwords don't match",
    de: "Passwoerter stimmen nicht überein",
  },
};

export const getAuthSignUpFormValidationSchema = (language: LanguageType) =>
  z
    .object({
      username: getUserNameSchema(language),
      email: getEmailSchema(language),
      password: getPasswordSchema(language),
      confirmPassword: getPasswordSchema(language),
      phone: getPhoneSchema(language),
      isCompany: z.boolean().optional(),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: sungUpErrorMessages.noMatchPassword[language],
      path: ["confirmPassword"],
    });
