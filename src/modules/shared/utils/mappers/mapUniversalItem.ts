import { UniversalItemApiTypeInput } from "../../api";
import { EducationType, EmploymentType, ScheduleType, WeekHoursType } from "../../types";

export const mapUniversalItem = (item: UniversalItemApiTypeInput) => {
  const {
    creation_date: creationDate,
    applicants_quantity: applicantsQuantity,
    user_id: userId,
    city,
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
    ...resumeData
  } = item;

  return {
    ...resumeData,
    employmentStartDate: employmentStartDate ? new Date(employmentStartDate) : undefined,
    creationDate: new Date(creationDate),
    updatedAt: updatedAt ? new Date(updatedAt) : undefined,
    schedule: (schedule as ScheduleType[]) ?? undefined,
    weekHours: (weekHours as WeekHoursType[]) ?? undefined,
    city: city ?? undefined,
    employment: (employment as EmploymentType[]) ?? undefined,
    education: (education as EducationType) ?? undefined,
    salary: salary ?? undefined,
    about: about ?? undefined,
    applicantsQuantity,
    userId,
    isInFavorites: isInFavorites ?? undefined,
    isInApplies: isInApplies ?? undefined,
  };
};
