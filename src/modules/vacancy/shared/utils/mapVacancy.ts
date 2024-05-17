import { parseDateFromString } from "../../../shared/utils/helpers";
import { VacancyApiTypeInput, VacancyItem } from "../types";

export const mapVacancy = (vacancy: VacancyApiTypeInput): VacancyItem => {
  return {
    id: vacancy.id,
    companyCode: vacancy.company.companycode,
    city: vacancy.region.name,
    coordinates: {
      lat: vacancy.addresses.address[0].lat,
      lng: vacancy.addresses.address[0].lng,
    },
    name: vacancy.company.name,
    employment: vacancy.employment,
    position: vacancy["job-name"],
    salary: [vacancy.salary_min, vacancy.salary_max],
    schedule: vacancy.schedule,
    education: vacancy.requirement.education,
    phone: vacancy.contact_list[0]?.contact_value,
    creationDate: parseDateFromString(vacancy["creation-date"]),
    about: vacancy.duty,
  };
};
