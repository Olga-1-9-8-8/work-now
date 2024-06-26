import { ResumeApiType, ResumeType } from "../../../resume/shared/types";
import { EducationType, EmploymentType, ScheduleType, WeekHoursType } from "../../../shared/types";

export const mapProfileResume = (resume: ResumeApiType): ResumeType => {
  const {
    creation_date: creationDate,
    applicants_quantity: applicantsQuantity,
    user_Id: userId,
    city,
    employment_start_date: employmentStartDate,
    schedule,
    week_hours: weekHours,
    employment,
    education,
    salary,
    about,
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
  };
};

export const mapProfileResumes = (resumes: ResumeApiType[]) => {
  return resumes.map((resume) => mapProfileResume(resume));
};
