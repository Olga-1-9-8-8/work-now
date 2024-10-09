import { LanguageType } from "../../../configs";
import { educationValueToEducationTitle } from "../../../const";
import { EducationType } from "../../../types";

export const getEducationTitle = (education: EducationType, language: LanguageType) => {
  return educationValueToEducationTitle[language][education];
};
