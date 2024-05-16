import { EducationType } from "./EducationType";
import { EmploymentType } from "./EmploymentType";
import { GenderType } from "./GenderType";
import { ScheduleType } from "./ScheduleType";
import { WeekHoursType } from "./WeekHoursType";

export interface UniversalCardItemType {
  id: number;
  name: string;
  position: string;
  creationDate?: Date | null;
  city?: string;
  applicantsQuantity?: number;
  employment?: EmploymentType[] | EmploymentType;
  salary?: number[];
  schedule?: ScheduleType | WeekHoursType[];
  about?: string;
  education?: EducationType;
  employmentStartDate?: Date;
  views?: number;
  phone?: string;
  gender?: GenderType;
  age?: number;
  image?: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
}
