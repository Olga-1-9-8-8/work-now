import { z } from "zod";
import { LanguageType } from "../../configs";

const emailErrorMessages = {
  minLength1: {
    ru: "Введите ваш Email",
    en: "Enter your Email",
    de: "Geben Sie Ihre E-Mail-Adresse ein",
  },
  email: {
    ru: "Неверный адрес электронной почты",
    en: "Invalid email address",
    de: "Ungültiger E-Mail-Adresse",
  },
};

export const getEmailSchema = (language: LanguageType) =>
  z
    .string()
    .min(1, {
      message: emailErrorMessages.minLength1[language],
    })
    .email({ message: emailErrorMessages.email[language] });
