import { GenderType } from "../../../shared/components/user";
import {
  EducationType,
  EmploymentType,
  ScheduleType,
  WeekHoursType,
} from "../../../shared/configs/searchOptionsConfig";

export interface ResumesListItem {
  id: number;
  name: string;
  position: string;
  creationDate: Date;
  city?: string;
  applicantsQuantity: number;
  employment?: EmploymentType[];
  salary?: number[];
  schedule?: ScheduleType | WeekHoursType[];
  about?: string;
  education?: EducationType;
  employmentStartDate?: Date;
  views: number;
  phone: string;
  gender?: GenderType;
  age?: number;
  image?: string;
}

export type ResumesListType = ResumesListItem[];
