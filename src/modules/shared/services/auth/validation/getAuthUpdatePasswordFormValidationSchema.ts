import { z } from "zod";
import { LanguageType } from "../../../configs";
import { getPasswordSchema } from "../../../validation";

const updatePasswordErrorMessages = {
  noMatchPassword: {
    ru: "Пароли не совпадают",
    en: "Passwords don't match",
    de: "Passwoerter stimmen nicht überein",
  },
};

export const getAuthUpdatePasswordFormValidationSchema = (language: LanguageType) =>
  z
    .object({
      password: getPasswordSchema(language),
      confirmPassword: getPasswordSchema(language),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: updatePasswordErrorMessages.noMatchPassword[language],
      path: ["confirmPassword"],
    });
