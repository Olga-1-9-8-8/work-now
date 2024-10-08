import { z } from "zod";
import { LanguageType } from "../../configs/internationalization/InternationalizationConfig";

const userNameErrorMessages = {
  minLength1: {
    ru: "Введите свое имя",
    en: "Please enter your name",
    de: "Bitte geben Sie Ihren Namen ein",
  },
  minLength2: {
    ru: "Имя пользователя должно содержать хотя бы 2 буквы",
    en: "Username must be at least 2 characters long",
    de: "Der Benutzername muss mindestens 2 Zeichen lang sein",
  },
  maxLength50: {
    ru: "Имя пользователя должно содержать максимум 50 букв",
    en: "Username must be at most 50 characters long",
    de: "Der Benutzername darf maximal 50 Zeichen lang sein",
  },
};

export const getUserNameSchema = (language: LanguageType) =>
  z
    .string()
    .min(1, {
      message: userNameErrorMessages.minLength1[language],
    })
    .min(2, {
      message: userNameErrorMessages.minLength2[language],
    })
    .max(50, userNameErrorMessages.maxLength50[language]);
