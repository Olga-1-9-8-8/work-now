import { ProfileType } from "../../../shared/services/auth";
import { EducationType, EmploymentType, ScheduleType, WeekHoursType } from "../../../shared/types";

export interface ResumeType {
  id: number;
  userId: string;
  position: string;
  creationDate: Date;
  city?: string;
  applicantsQuantity: number;
  employment?: EmploymentType[];
  salary?: number[];
  schedule?: ScheduleType[];
  weekHours?: WeekHoursType[];
  about?: string;
  education?: EducationType;
  employmentStartDate?: Date;
  views: number;
  updatedAt?: Date;
}

export interface ResumeItem extends Omit<ProfileType, "id" | "email">, ResumeType {}
