import { ResumeWithProfileApiTypeInput, VacancyWithProfileApiTypeInput } from "../../api";
import { LanguageType } from "../../configs";
import { UniversalCardItemType } from "../../types";
import { mapUniversalItemWithProfile } from "./mapUniversalItemWithProfile";

export interface ResumeVacancyItemType {
  resumes: ResumeWithProfileApiTypeInput[] | [];
  vacancies: VacancyWithProfileApiTypeInput[] | [];
}

export const mapResumeVacancyItem = (
  item: ResumeVacancyItemType,
  language: LanguageType,
): UniversalCardItemType[] => {
  if (item.resumes.length > 0) {
    return item.resumes.map((resume) => mapUniversalItemWithProfile(resume, language));
  }

  if (item.vacancies.length > 0) {
    return item.vacancies.map((vacancy) => mapUniversalItemWithProfile(vacancy, language));
  }
  return [];
};
