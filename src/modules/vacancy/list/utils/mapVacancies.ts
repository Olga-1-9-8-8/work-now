import { parseDateFromString } from "../../../shared/utils/helpers";
import { VacanciesListType } from "../types/VacanciesListType";

export const mapVacancies = (vacancies: any): VacanciesListType => {
  return vacancies.map((vacancy: any) => {
    const vac = vacancy.vacancy;
    return {
      id: vac.id,
      city: vac.region.name,
      coordinates: {
        lat: vac.addresses.address[0].lat,
        lng: vac.addresses.address[0].lng,
      },
      name: vac.company.name,
      employment: vac.employment,
      position: vac["job-name"],
      salary: [vac.salary_min, vac.salary_max],
      schedule: vac.schedule,
      education: vac.requirement.education,
      phone: vac.contact_list[0]?.contact_value,
      creationDate: parseDateFromString(vac["creation-date"]),
      about: vac.duty,
    };
  });
};
