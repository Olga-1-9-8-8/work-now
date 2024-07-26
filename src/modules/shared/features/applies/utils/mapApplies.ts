import { ResumeWithProfileApiTypeInput } from "../../../../resume/shared/types";
import { VacancyWithProfileApiTypeInput } from "../../../../vacancy/shared/types/api/VacancyApiType";
import { UniversalCardItemType } from "../../../types";
import { mapUniversalItem } from "../../../utils";

export interface AppliesApiFullType {
  resumes: ResumeWithProfileApiTypeInput[] | [];
  vacancies: VacancyWithProfileApiTypeInput[] | [];
}

export const mapApplies = (applies: AppliesApiFullType): UniversalCardItemType[] => {
  if (applies.resumes.length > 0) {
    return applies.resumes.map((resume) => mapUniversalItem(resume));
  }

  if (applies.vacancies.length > 0) {
    return applies.vacancies.map((vacancy) => mapUniversalItem(vacancy));
  }
  return [];
};
