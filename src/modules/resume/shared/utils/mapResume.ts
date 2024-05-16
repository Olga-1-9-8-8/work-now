import {
  EducationType,
  EmploymentType,
  GenderType,
  ScheduleType,
  WeekHoursType,
} from "../../../shared/types";
import { concatNullableArrays } from "../../../shared/utils/helpers";
import { ResumeItem, ResumeWithUserApiTypeInput } from "../types";

export const mapResume = (resume: ResumeWithUserApiTypeInput): ResumeItem => {
  const {
    creationDate,
    city,
    employmentStartDate,
    schedule,
    users,
    weekHours,
    employment,
    education,
    salary,
    about,
    ...resumeData
  } = resume;

  const { fullName: name, phone, gender, age, image } = users!;

  return {
    ...resumeData,
    employmentStartDate: employmentStartDate ? new Date(employmentStartDate) : undefined,
    creationDate: new Date(creationDate),
    schedule:
      (concatNullableArrays(schedule, weekHours) as ScheduleType | WeekHoursType[]) ?? undefined,
    city: city ?? undefined,
    employment: (employment as EmploymentType[]) ?? undefined,
    education: (education as EducationType) ?? undefined,
    salary: salary ?? undefined,
    about: about ?? undefined,
    gender: (gender as GenderType) ?? undefined,
    name,
    phone,
    age: age ?? undefined,
    image: image ?? undefined,
  };
};
