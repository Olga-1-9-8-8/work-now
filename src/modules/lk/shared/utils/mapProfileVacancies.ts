import { VacancyApiType } from "../../../shared/api";
import { mapUniversalItem } from "../../../shared/utils";

export const mapProfileVacancies = (vacancies: VacancyApiType[]) => {
  return vacancies.map((vacancy) => mapUniversalItem(vacancy));
};
