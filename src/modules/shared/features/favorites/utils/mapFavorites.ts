import { ResumeWithProfileApiTypeInput } from "../../../../resume/shared/types";
import { VacancyWithProfileApiTypeInput } from "../../../../vacancy/shared/types";
import { UniversalCardItemType } from "../../../types";
import { mapUniversalItem } from "../../../utils";

export interface AppliesApiFullType {
  resumes: ResumeWithProfileApiTypeInput[] | [];
  vacancies: VacancyWithProfileApiTypeInput[] | [];
}

export const mapFavorites = (favorites: AppliesApiFullType): UniversalCardItemType[] => {
  if (favorites.resumes.length > 0) {
    return favorites.resumes.map((resume) => mapUniversalItem(resume));
  }

  if (favorites.vacancies.length > 0) {
    return favorites.vacancies.map((vacancy) => mapUniversalItem(vacancy));
  }
  return [];
};
