import { EducationType } from "./EducationType";
import { EmploymentType } from "./EmploymentType";
import { GenderType } from "./GenderType";
import { ScheduleType } from "./ScheduleType";
import { WeekHoursType } from "./WeekHoursType";

export interface UniversalCardItemType {
  id: number | string;
  name: string;
  position: string;
  creationDate?: Date | null;
  city?: string;
  applicantsQuantity?: number;
  employment?: EmploymentType[] | string;
  salary?: number[];
  schedule?: ScheduleType[] | WeekHoursType[] | string;
  about?: string;
  education?: EducationType | string;
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
  companyCode?: string;
}
