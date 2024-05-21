import { educationValueToEducationTitle } from "../../../const";
import { EducationType } from "../../../types";

export const getEducationTitle = (education?: string | EducationType): string => {
  return educationValueToEducationTitle[education as EducationType] ?? education ?? "Не указано";
};
