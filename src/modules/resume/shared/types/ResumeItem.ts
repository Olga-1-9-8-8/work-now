import {
  EducationType,
  EmploymentType,
  GenderType,
  ScheduleType,
  WeekHoursType,
} from "../../../shared/types";

export interface ResumeItem {
  id: number;
  userId: string;
  name: string;
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
  phone: string;
  gender?: GenderType;
  age?: number;
  image?: string;
}
