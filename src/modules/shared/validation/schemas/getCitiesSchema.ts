import { z } from "zod";
import { LanguageType } from "../../configs";

const citiesErrorMessages = {
  minLength1: {
    ru: "Должен быть выбран хотя бы 1 город / регион",
    en: "At least 1 city must be selected",
    de: "Mindestens 1 Stadt muss ausgewählt werden",
  },
};

export const getCitiesSchema = (language: LanguageType) =>
  z.array(z.string()).min(1, {
    message: citiesErrorMessages.minLength1[language],
  });
