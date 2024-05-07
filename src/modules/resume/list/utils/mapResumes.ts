import { GenderType } from "../../../shared/components/user";
import {
  EducationType,
  EmploymentType,
  ScheduleType,
  WeekHoursType,
} from "../../../shared/configs/searchOptionsConfig";
import { Database } from "../../../shared/services/types/database.types";
import { concatNullableArrays } from "../../../shared/utils/helpers";
import { ResumesListType } from "../types/ResumesListType";

export type UserType = Database["public"]["Tables"]["users"]["Row"];
export type ResumeType = Database["public"]["Tables"]["resumes"]["Row"];

export interface ResumeWithUserType extends ResumeType {
  users: UserType | null;
}

export const mapResumes = (resumes: ResumeWithUserType[]): ResumesListType => {
  return resumes?.map((resume) => {
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
  });
};
