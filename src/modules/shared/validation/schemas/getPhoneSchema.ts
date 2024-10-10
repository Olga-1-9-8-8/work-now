import { z } from "zod";
import { LanguageType } from "../../configs";

export const phoneErrorMessages = {
  minLength1: {
    ru: "Введите ваш номер телефона",
    en: "Enter your phone number",
    de: "Geben Sie Ihre Telefonnummer ein",
  },
  minLength10: {
    ru: "Неверный номер телефона, менее 10 цифр",
    en: "Invalid phone number, less than 10 digits",
    de: "Ungültiger Telefonnummer, weniger als 10 Ziffern",
  },
};

export const getPhoneSchema = (language: LanguageType) =>
  z
    .string()
    .min(1, {
      message: phoneErrorMessages.minLength1[language],
    })
    .min(10, {
      message: phoneErrorMessages.minLength10[language],
    });
