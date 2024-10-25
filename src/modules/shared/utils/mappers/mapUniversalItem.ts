import { UniversalItemApiTypeInput } from "../../api";
import { LanguageType } from "../../configs";
import {
  CityType,
  EducationType,
  EmploymentType,
  GenderType,
  ScheduleType,
  WeekHoursType,
} from "../../types";

export const mapUniversalItem = (item: UniversalItemApiTypeInput, language: LanguageType) => {
  const {
    creation_date: creationDate,
    applicants_quantity: applicantsQuantity,
    user_id: userId,
    employment_start_date: employmentStartDate,
    schedule,
    week_hours: weekHours,
    employment,
    education,
    salary,
    updated_at: updatedAt,
    gender,
    about,
    ...data
  } = item;

  return {
    ...data,
    employmentStartDate: employmentStartDate ? new Date(employmentStartDate) : undefined,
    creationDate: new Date(creationDate),
    updatedAt: updatedAt ? new Date(updatedAt) : undefined,
    schedule: (schedule as ScheduleType[]) ?? undefined,
    weekHours: (weekHours as WeekHoursType[]) ?? undefined,
    cities: data?.[`cities_${language}`]?.map((city) => ({ city }) as CityType),
    employment: (employment as EmploymentType[]) ?? undefined,
    education: (education as EducationType) ?? undefined,
    salary: salary ?? undefined,
    about: about ?? undefined,
    applicantsQuantity,
    userId,
    gender: gender ? (gender as GenderType) : undefined,
  };
};
