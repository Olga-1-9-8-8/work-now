import { EducationType } from "./EducationType";
import { EmploymentType } from "./EmploymentType";
import { GenderType } from "./GenderType";
import { ScheduleType } from "./ScheduleType";
import { UserEntity } from "./UserRoles";
import { WeekHoursType } from "./WeekHoursType";

interface UniversalProfileType {
  userName?: string;
  phone?: string;
  gender?: GenderType;
  age?: string;
  avatar?: string;
  role?: UserEntity;
}

export interface UniversalJobType {
  id: number | string;
  userId?: string;
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
  coordinates?: {
    lat: string;
    lng: string;
  };
  companyCode?: string;
  isInFavorites?: boolean;
  isInApplies?: boolean;
}

export interface UniversalCardItemType extends UniversalProfileType, UniversalJobType {}
