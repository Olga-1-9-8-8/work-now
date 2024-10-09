import { z } from "zod";
import { LanguageType } from "../../configs";

const positionErrorMessages = {
  minLength2: {
    ru: "Должность должна содержать хотя бы 2 буквы",
    en: "Position must be at least 2 characters long",
    de: "Position muss mindestens 2 Zeichen lang sein",
  },
  maxLength50: {
    ru: "Должность должна  содержать максимум 50 букв",
    en: "Position must be at most 50 characters long",
    de: "Position darf maximal 50 Zeichen lang sein",
  },
};

export const getPositionSchema = (language: LanguageType) =>
  z
    .string()
    .min(2, {
      message: positionErrorMessages.minLength2[language],
    })
    .max(50, positionErrorMessages.maxLength50[language]);
