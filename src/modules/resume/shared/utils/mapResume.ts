import {
  EducationType,
  EmploymentType,
  GenderType,
  ScheduleType,
  WeekHoursType,
} from "../../../shared/types";
import { ResumeItem, ResumeWithProfileApiTypeInput } from "../types";

export const mapResume = (resume: ResumeWithProfileApiTypeInput): ResumeItem => {
  const {
    creation_date: creationDate,
    applicants_quantity: applicantsQuantity,
    user_Id: userId,
    city,
    employment_start_date: employmentStartDate,
    schedule,
    profiles,
    week_hours: weekHours,
    employment,
    education,
    salary,
    about,
    ...resumeData
  } = resume;

  const { username: userName, phone, gender, age, avatar } = profiles!;

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
    age: age ?? undefined,
    avatar: avatar ?? undefined,
  };
};
