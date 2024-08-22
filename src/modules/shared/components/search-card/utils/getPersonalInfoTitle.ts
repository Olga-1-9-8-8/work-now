import { GenderType, getGenderTitle } from "../../../types";
import { getRightNounYearDeclension } from "../../../utils/helpers";

export const getPersonalInfoTitle = (age?: string, gender?: GenderType, isHiring?: boolean) => {
  const ageTitle = age ? `/ ${getRightNounYearDeclension(String(age))}` : "";
  const genderTitle = gender ? getGenderTitle(gender) : "Не указан";

  if (isHiring) {
    return genderTitle;
  }
  return `${genderTitle} ${ageTitle}`;
};
