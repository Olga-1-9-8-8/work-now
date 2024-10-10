import { z } from "zod";
import { LanguageType } from "../../configs";

const passwordErrorMessages = {
  minLength1: {
    ru: "Введите пароль",
    en: "Enter password",
    de: "Geben Sie Ihr Passwort ein",
  },
  minLength6: {
    ru: "Минимальная длина пароля 6 символов",
    en: "Password must be at least 6 characters long",
    de: "Die Passwortbrücke muss mindestens 6 Zeichen lang sein",
  },
};

export const getPasswordSchema = (language: LanguageType) =>
  z
    .string()
    .min(1, {
      message: passwordErrorMessages.minLength1[language],
    })
    .min(6, {
      message: passwordErrorMessages.minLength6[language],
    });
