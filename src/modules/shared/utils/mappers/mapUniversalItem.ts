import { UniversalItemApiTypeInput } from "../../api";
import {
  CityType,
  EducationType,
  EmploymentType,
  GenderType,
  ScheduleType,
  WeekHoursType,
} from "../../types";

export const mapUniversalItem = (item: UniversalItemApiTypeInput) => {
  const {
    creation_date: creationDate,
    applicants_quantity: applicantsQuantity,
    user_id: userId,
    cities,
    employment_start_date: employmentStartDate,
    schedule,
    week_hours: weekHours,
    employment,
    education,
    salary,
    about,
    isInFavorites,
    isInApplies,
    updated_at: updatedAt,
    gender,
    ...data
  } = item;

  return {
    ...data,
    employmentStartDate: employmentStartDate ? new Date(employmentStartDate) : undefined,
    creationDate: new Date(creationDate),
    updatedAt: updatedAt ? new Date(updatedAt) : undefined,
    schedule: (schedule as ScheduleType[]) ?? undefined,
    weekHours: (weekHours as WeekHoursType[]) ?? undefined,
    cities: cities ? cities.map((city) => ({ city }) as CityType) : undefined,
    employment: (employment as EmploymentType[]) ?? undefined,
    education: (education as EducationType) ?? undefined,
    salary: salary ?? undefined,
    about: about ?? undefined,
    applicantsQuantity,
    userId,
    gender: gender ? (gender as GenderType) : undefined,
    isInFavorites: isInFavorites ?? undefined,
    isInApplies: isInApplies ?? undefined,
  };
};
