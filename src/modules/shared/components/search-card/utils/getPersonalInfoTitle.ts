import { TOptions } from "i18next";
import { LanguageType } from "../../../configs";
import { GenderType, getGenderTitle } from "../../../types";

export const getPersonalInfoTitle = (
  language: LanguageType,
  t: (key: string, options: TOptions) => string,
  gender?: GenderType,
  age?: string,
  isHiring?: boolean,
) => {
  const ageTitle = age
    ? `/ ${t("shared.details.card.personalData.age.title", { count: Number(age) })}`
    : "";
  const genderTitle = getGenderTitle(language, gender);

  if (isHiring) {
    return genderTitle;
  }
  return `${genderTitle} ${ageTitle}`;
};
