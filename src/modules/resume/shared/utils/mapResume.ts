import {
  EducationType,
  EmploymentType,
  GenderType,
  ScheduleType,
  UserEntity,
  WeekHoursType,
} from "../../../shared/types";
import { ResumeItem, ResumeWithProfileApiTypeInput } from "../types";

export const mapResume = (resume: ResumeWithProfileApiTypeInput): ResumeItem => {
  const {
    creation_date: creationDate,
    applicants_quantity: applicantsQuantity,
    user_id: userId,
    city,
    employment_start_date: employmentStartDate,
    schedule,
    profiles,
    week_hours: weekHours,
    employment,
    education,
    salary,
    about,
    isInFavorites,
    isInApplies,
    ...resumeData
  } = resume;

  const { username: userName, phone, gender, age, avatar, role } = profiles!;

  return {
    ...resumeData,
    employmentStartDate: employmentStartDate ? new Date(employmentStartDate) : undefined,
    creationDate: new Date(creationDate),
    schedule: (schedule as ScheduleType[]) ?? undefined,
    weekHours: (weekHours as WeekHoursType[]) ?? undefined,
    city: city ?? undefined,
    employment: (employment as EmploymentType[]) ?? undefined,
    education: (education as EducationType) ?? undefined,
    salary: salary ?? undefined,
    about: about ?? undefined,
    applicantsQuantity,
    userId,
    gender: (gender as GenderType) ?? undefined,
    userName,
    phone,
    role: role as UserEntity,
    age: age ?? undefined,
    avatar: avatar ?? undefined,
    isInFavorites: isInFavorites ?? undefined,
    isInApplies: isInApplies ?? undefined,
  };
};
