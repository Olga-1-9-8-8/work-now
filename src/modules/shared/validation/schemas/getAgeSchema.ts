import { z } from "zod";
import { LanguageType } from "../../configs/internationalization/InternationalizationConfig";
import { UserEntity } from "../../types";

const MIN_PERSON_AGE = 14;

const errorMessages = {
  ageMoreThan14: {
    ru: "Возраст должен быть больше 14",
    en: "Age must be 14 or older",
    de: "Das Alter muss 14 oder gültig sein",
  },

  ageMoreThan0: {
    ru: "Количество лет должно быть больше 0",
    en: "Age must be more then 0",
    de: "Das Alter muss 0 oder gültig sein",
  },
};

export const getAgeSchema = (role: UserEntity, language: LanguageType) => {
  if (role === UserEntity.Person) {
    return z
      .string()
      .refine(
        (age) => {
          const parsedAge = Number(age);
          return parsedAge >= MIN_PERSON_AGE || !parsedAge;
        },
        { message: errorMessages.ageMoreThan14[language] },
      )
      .optional();
  }
  return z
    .string()
    .refine(
      (age) => {
        const parsedAge = Number(age);
        return parsedAge >= 0 || !parsedAge;
      },
      { message: errorMessages.ageMoreThan0[language] },
    )
    .optional();
};
