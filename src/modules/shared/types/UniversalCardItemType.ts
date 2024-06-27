import { EducationType } from "./EducationType";
import { EmploymentType } from "./EmploymentType";
import { GenderType } from "./GenderType";
import { ScheduleType } from "./ScheduleType";
import { WeekHoursType } from "./WeekHoursType";

export interface UniversalCardItemType {
  id: number | string;
  userId?: string;
  userName: string;
  position: string;
  creationDate?: Date | null;
  city?: string;
  applicantsQuantity?: number;
  employment?: EmploymentType[] | string;
  salary?: number[];
  schedule?: ScheduleType[] | string;
  weekHours?: WeekHoursType[];
  about?: string;
  education?: EducationType | string;
  employmentStartDate?: Date;
  views?: number;
  phone?: string;
  gender?: GenderType;
  age?: string;
  image?: string;
  coordinates?: {
    lat: string;
    lng: string;
  };
  companyCode?: string;
  isInFavorites?: boolean;
  isInApplies?: boolean;
}
