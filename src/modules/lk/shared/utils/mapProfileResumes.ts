import { ResumeApiType } from "../../../resume/shared/types";
import {
  EducationType,
  EmploymentType,
  ItemType,
  ScheduleType,
  WeekHoursType,
} from "../../../shared/types";

export const mapProfileResume = (resume: ResumeApiType): ItemType => {
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
    updated_at: updatedAt,
    ...resumeData
  } = resume;

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
    updatedAt: updatedAt ? new Date(updatedAt) : undefined,
  };
};

export const mapProfileResumes = (resumes: ResumeApiType[]) => {
  return resumes.map((resume) => mapProfileResume(resume));
};
