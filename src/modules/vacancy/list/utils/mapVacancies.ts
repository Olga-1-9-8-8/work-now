import { VacancyApiTypeInput } from "../../shared/types";
import { mapVacancy } from "../../shared/utils";

export const mapVacancies = (vacancies: VacancyApiTypeInput[]) => {
  return vacancies.map((vacancy: any) => {
    return mapVacancy(vacancy.vacancy);
  });
};
