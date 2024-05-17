import { VacancyApiTypeInput } from "../../shared/types";
import { mapVacancy } from "../../shared/utils";
import { VacanciesListType } from "../types/VacanciesListType";

export const mapVacancies = (vacancies: VacancyApiTypeInput[]): VacanciesListType => {
  return vacancies.map((vacancy: any) => {
    return mapVacancy(vacancy.vacancy);
  });
};
